import {Navigate} from 'react-router-dom';
import { AppRoute } from '..';
import {FC, PropsWithChildren } from 'react';
import { AuthorizationStatus } from '../../const';

export type TPrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
}

export const PrivateRoute: FC<PropsWithChildren<TPrivateRouteProps>> = (props) => {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children as JSX.Element
      : <Navigate to={AppRoute.Login} />
  );
};
