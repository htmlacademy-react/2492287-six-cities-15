import { FC } from 'react';
import { Logo } from '../logo';
import { Outlet, useLocation } from 'react-router-dom';
import { getClassName, getIsLoginPath } from './lib';
import { useAppSelector } from '../../hooks';
import { UserInfo } from '../user-info';
import { getUser } from '../../store/user-process/user-process.selectors';
import { getFavorites } from '../../store/offer-data/offer-data.selectors';

export const Layout: FC = () => {
  const user = useAppSelector(getUser);
  const location = useLocation();
  const isLoginPath = getIsLoginPath(location.pathname);
  const favorites = useAppSelector(getFavorites);
  return (
    <div className={`page ${getClassName(location.pathname, favorites.length)}`} data-testid='layout-container'>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <Logo logoLocation='Header'/>
            </div>
            { !isLoginPath && <UserInfo user={user} location={location.pathname}/> }
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
};
