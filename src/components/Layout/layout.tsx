import {FC} from 'react';
import AuthorizationStatus from '../../shared/authorization-status';
import { Outlet, useLocation } from 'react-router-dom';
import { getClassName, getIsLoginPath } from './lib';
import { Logo } from '../logo';

export type TLayoutProps = {
  authorizationStatus: AuthorizationStatus;
}

export const Layout: FC<TLayoutProps> = ({authorizationStatus} :TLayoutProps) => {
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;
  const username = isAuth ? 'Oliver.conner@gmail.com' : '';
  const favoriteCount = isAuth ? 3 : 0;
  const location = useLocation();

  return (
    <div className={`page ${getClassName(location.pathname)}`}>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <Logo/>
            </div>
            {
              !getIsLoginPath(location.pathname) &&
              <nav className='header__nav'>
                <ul className='header__nav-list'>
                  <li className='header__nav-item user'>
                    <a
                      className='header__nav-link header__nav-link--profile'
                      href='#'
                    >
                      <div className='header__avatar-wrapper user__avatar-wrapper'></div>
                      <span className='header__user-name user__name'>
                        {username}
                      </span>
                      <span className='header__favorite-count'>{favoriteCount}</span>
                    </a>
                  </li>
                  <li className='header__nav-item'>
                    <a className='header__nav-link' href='#'>
                      <span className='header__signout'>{isAuth ? 'Sign out' : 'Sign in'}</span>
                    </a>
                  </li>
                </ul>
              </nav>
            }
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
};
