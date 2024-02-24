import { LogoLocation } from '../../../const';

export const getLogoClassName = (logoLocation: LogoLocation) => logoLocation === LogoLocation.Header ? 'header__logo-link header__logo-link--active' : 'footer__logo-link';
export const getLogoImgClassName = (logoLocation: LogoLocation) => logoLocation === LogoLocation.Header ? 'header__logo' : 'footer__logo-link';
export const getLogoSize = (logoLocation: LogoLocation) => logoLocation === LogoLocation.Header ? {width: 81, height: 41} : {width: 64, height: 33};
