import {Navigate} from 'react-router-dom';
import AuthorizationStatus from '../../shared/AuthorizationStatus';
import AppRoute from '../../shared/AppRoute';
import {PropsWithChildren } from 'react';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
}

function PrivateRoute(props: PropsWithChildren<PrivateRouteProps>): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children as JSX.Element
      : <Navigate to={`/${AppRoute.Login}`} />
  );
}

export default PrivateRoute;
