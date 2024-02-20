import { FC } from 'react';
import { AppRoute } from '../../app';

export const MainLogo: FC = () =>
  (
    <a className='header__logo-link header__logo-link--active' href={AppRoute.Root}>
      <img
        className='header__logo'
        src='img/logo.svg'
        alt='6 cities logo'
        width={81}
        height={41}
      />
    </a>
  );
