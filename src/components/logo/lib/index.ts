import { LogoClassName, LogoImageClass, LogoLocation,
  LogoSize, TLogoLocation } from '../const';

export const getLogoClassName = (logoLocation: TLogoLocation) => (
  logoLocation === LogoLocation.Header
    ? LogoClassName.Header
    : LogoClassName.Footer
);
export const getLogoImgClassName = (logoLocation: TLogoLocation) => (
  logoLocation === LogoLocation.Header
    ? LogoImageClass.Header
    : LogoImageClass.Footer
);

export const getLogoSize = (logoLocation: TLogoLocation) => (
  logoLocation === 'Header' ? LogoSize.Header : LogoSize.Footer
);
