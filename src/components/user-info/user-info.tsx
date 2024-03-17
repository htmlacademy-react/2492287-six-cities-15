import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../app';
import { TUserData } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-action';
import { getFavorites } from '../../store/offer-data/selectors';
import { getIsAuth } from '../../store/user-process/selectors';

export type TUserInfoProps = {
  user: TUserData | null;
  location: string;
}

export const UserInfo: FC<TUserInfoProps> = ({user, location}) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(getFavorites);
  const isAuth = useAppSelector(getIsAuth);

  const linkUrl = isAuth ? location : AppRoute.Login;

  const handleLoginButtonClick = () => {
    if (isAuth){
      dispatch(logoutAction());
    }
  };

  return (
    <nav className='header__nav' data-testid='user-info'>
      <ul className='header__nav-list'>
        {
          isAuth &&
          <li className='header__nav-item user'>
            <Link
              className='header__nav-link header__nav-link--profile'
              to={AppRoute.Favorites}
            >
              <div className='header__avatar-wrapper user__avatar-wrapper'>
                <img src={user?.avatarUrl} style={{borderRadius: 20}}/>
              </div>
              <span className='header__user-name user__name'>
                {user?.email}
              </span>
              <span className='header__favorite-count'>{favorites.length}</span>
            </Link>
          </li>
        }
        <li className='header__nav-item'>
          <Link className='header__nav-link' to={linkUrl} onClick={handleLoginButtonClick}>
            <span className='header__signout'>{isAuth ? 'Log out' : 'Login'}</span>
          </Link>
        </li>
      </ul>
    </nav>

  );
};
