import {JSX} from 'react';
import Logo from '../Logo/logo';
import AuthorizationStatus from '../../shared/AuthorizationStatus';
import { Outlet, useLocation } from 'react-router-dom';

type LayoutProps = {
  authorizationStatus: AuthorizationStatus;
}

function Layout({authorizationStatus} :LayoutProps): JSX.Element {
  const username = authorizationStatus === AuthorizationStatus.Auth ? 'Oliver.conner@gmail.com' : '';
  const favoriteCount = authorizationStatus === AuthorizationStatus.Auth ? 3 : 0;
  const location = useLocation();
  const getClassName = (pathname: string) => {
    switch(pathname){
      case '/login': return ' page--gray page--login';
      case '/': return ' page--gray page--main';
      default: return '';
    }
  };
  const getShowUserInfo = (pathname: string) => pathname !== '/login';

  return (
    <div className={`page${getClassName(location.pathname)}`}>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <Logo/>
            </div>
            {
              getShowUserInfo(location.pathname) &&
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
                      <span className='header__signout'>{authorizationStatus === AuthorizationStatus.Auth ? 'Sign out' : 'Sign in'}</span>
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
}

export default Layout;
