import { FC } from 'react';
import { Logo } from '../logo';
import { Outlet, useLocation } from 'react-router-dom';
import { getClassName, getIsLoginPath } from './lib';
import { LogoLocation } from '../../const';
import { useAppSelector } from '../../hooks';
import { getUser } from '../../store/selectors';
import { UserInfo } from '../user-data';

export const Layout: FC = () => {
  const user = useAppSelector(getUser);
  const location = useLocation();
  const isLoginPath = getIsLoginPath(location.pathname);

  return (
    <div className={`page ${getClassName(location.pathname)}`}>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <Logo logoLocation={LogoLocation.Header}/>
            </div>
            { !isLoginPath && <UserInfo user={user}/> }
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
};
