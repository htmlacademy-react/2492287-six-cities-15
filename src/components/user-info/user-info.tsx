import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../app';
import { TUserData } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { getFavorites } from '../../store/offer-data/offer-data-selectors';
import { getIsAuth } from '../../store/user-process/user-process-selectors';
import { AVATAR_STYLE, SignType } from './const';

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

        <li className='header__nav-item user'>
          <Link
            className='header__nav-link'
            to={AppRoute.Favorites}
          >
            {
              isAuth &&
              <>
                <div className='header__avatar-wrapper user__avatar-wrapper'>
                  <img src={user?.avatarUrl} style={AVATAR_STYLE}/>
                </div>
                <span className='header__user-name user__name'>
                  {user?.email}
                </span>
                <span className='header__favorite-count'>{favorites.length}</span>
              </>
            }
          </Link>
        </li>
        <li className='header__nav-item'>
          <Link
            className='header__nav-link header__nav-link--profile'
            to={linkUrl}
            onClick={handleLoginButtonClick}
          >
            <span className={`header__${isAuth ? 'signout' : 'login'}`}>
              {isAuth ? SignType.Out : SignType.In}
            </span>
          </Link>
        </li>
      </ul>
    </nav>

  );
};
