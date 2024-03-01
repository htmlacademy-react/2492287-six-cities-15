import { TErrorLoginDetail } from '../const';

export const concatErrors = (errors: TErrorLoginDetail[]) => {
  let result = '';
  if (errors){
    errors.forEach((item) => {
      item?.messages?.forEach((mess: string) => {
        result += `${mess}\r\n`;
      });
    });
  }
  return result;
};
