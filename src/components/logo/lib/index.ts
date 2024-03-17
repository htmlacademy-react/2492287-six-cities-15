import { TLogoLocation } from '../const';

export const getLogoClassName = (logoLocation: TLogoLocation) => logoLocation === 'Header' ? 'header__logo-link header__logo-link--active' : 'footer__logo-link';
export const getLogoImgClassName = (logoLocation: TLogoLocation) => logoLocation === 'Header' ? 'header__logo' : 'footer__logo-link';
export const getLogoSize = (logoLocation: TLogoLocation) => logoLocation === 'Header' ? {width: 81, height: 41} : {width: 64, height: 33};
