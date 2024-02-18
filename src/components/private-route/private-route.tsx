import {Navigate} from 'react-router-dom';
import AuthorizationStatus from '../../shared/AuthorizationStatus';
import AppRoute from '../../shared/AppRoute';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={'/' + AppRoute.Login} />
  );
}

export default PrivateRoute;
