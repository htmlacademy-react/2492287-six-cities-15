import { FC } from 'react';

export const Logo: FC = () =>
  (
    <a className='header__logo-link header__logo-link--active' href='/'>
      <img
        className='header__logo'
        src='img/logo.svg'
        alt='6 cities logo'
        width={81}
        height={41}
      />
    </a>
  );
