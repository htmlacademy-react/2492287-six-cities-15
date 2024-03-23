import axios, {AxiosError, AxiosInstance, AxiosResponse} from 'axios';
import { getToken } from './token';
import { StatusCodes } from 'http-status-codes';
import { toast } from 'react-toastify';

const ApiConfig = {
  BackendUrl: 'https://15.design.htmlacademy.pro/six-cities',
  RequestTimeout: 5000,
  TokenName: 'x-token'
} as const;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: ApiConfig.BackendUrl,
    timeout: ApiConfig.RequestTimeout,
  });

  api.interceptors.request.use(
    (config) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers[ApiConfig.TokenName] = token;
      }

      return config;
    },
  );

  type TDetailMessageType = {
    type: string;
    message: string;
  }

  const StatusCodeMapping: Record<number, boolean> = {
    [StatusCodes.BAD_REQUEST]: true,
    [StatusCodes.UNAUTHORIZED]: true,
    [StatusCodes.NOT_FOUND]: true,
    [StatusCodes.CONFLICT]: true
  };

  const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<TDetailMessageType>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const detailMessage = (error.response.data);

        toast.warn(detailMessage.message);
      }

      throw error;
    }
  );

  return api;
};


