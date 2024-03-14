import {Navigate} from 'react-router-dom';
import { AppRoute } from '..';
import {FC, PropsWithChildren } from 'react';
import { useAppSelector } from '../../hooks';
import { getIsAuth } from '../../store/user-process/selectors';

export const PrivateRoute: FC<PropsWithChildren> = ({children}) => {
  const isAuth = useAppSelector(getIsAuth);

  return (
    isAuth
      ? children as JSX.Element
      : <Navigate to={AppRoute.Login} />
  );
};
