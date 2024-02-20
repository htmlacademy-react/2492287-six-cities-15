import {Navigate} from 'react-router-dom';
import AuthorizationStatus from '../../shared/authorization-status';
import { AppRoute } from '../../app';
import {FC, PropsWithChildren } from 'react';

export type TPrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
}

export const PrivateRoute: FC<PropsWithChildren<TPrivateRouteProps>> = (props) => {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children as JSX.Element
      : <Navigate to={`/${AppRoute.Login}`} />
  );
};
