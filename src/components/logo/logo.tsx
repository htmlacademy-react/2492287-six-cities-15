import { FC } from 'react';
import { AppRoute } from '../../app';
import { Link } from 'react-router-dom';
import { APP_TITLE } from '../../const';
import { getLogoClassName, getLogoImgClassName, getLogoSize } from './lib';
import { TLogoLocation } from './const';

export type TLogoProps = {
  logoLocation: TLogoLocation;
}
export const Logo: FC<TLogoProps> = ({logoLocation}) => {
  const logoClassName = getLogoClassName(logoLocation);
  const logoImgClassName = getLogoImgClassName(logoLocation);
  const logoSize = getLogoSize(logoLocation);
  return (
    <div>
      <Link className={logoClassName} to={AppRoute.Root}>
        <img data-testid="logo-link"
          className={logoImgClassName}
          src='img/logo.svg'
          alt={`${APP_TITLE} logo`}
          width={logoSize.width}
          height={logoSize.height}
        />
      </Link>
    </div>
  );
};
