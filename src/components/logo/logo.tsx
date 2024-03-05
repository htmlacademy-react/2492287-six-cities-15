import { FC } from 'react';
import { AppRoute } from '../../app';
import { Link } from 'react-router-dom';
import { APP_TITLE, LogoLocation } from '../../const';
import { getLogoClassName, getLogoImgClassName, getLogoSize } from './lib';

export type TLogoProps = {
  logoLocation: LogoLocation;
}
export const Logo: FC<TLogoProps> = ({logoLocation = LogoLocation.Header}) => {
  const logoClassName = getLogoClassName(logoLocation);
  const logoImgClassName = getLogoImgClassName(logoLocation);
  const logoSize = getLogoSize(logoLocation);
  return (
    <Link className={logoClassName} to={AppRoute.Root}>
      <img
        className={logoImgClassName}
        src='img/logo.svg'
        alt={`${APP_TITLE} logo`}
        width={logoSize.width}
        height={logoSize.height}
      />
    </Link>
  );
};
