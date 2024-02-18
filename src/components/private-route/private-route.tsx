import {Navigate} from 'react-router-dom';
import AuthorizationStatus from '../../shared/AuthorizationStatus';
import AppRoute from '../../shared/AppRoute';
import {PropsWithChildren, ReactElement } from 'react';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
}

function PrivateRoute(props: PropsWithChildren<PrivateRouteProps>): ReactElement {
  const {authorizationStatus, children} = props;

  return (
    <div>
      {
        authorizationStatus === AuthorizationStatus.Auth
          ? children
          : <Navigate to={`/${AppRoute.Login}`} />
      }
    </div>
  );
}

export default PrivateRoute;
