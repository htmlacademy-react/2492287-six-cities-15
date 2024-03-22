export enum LogoLocation {
  Header = 'Header',
  Footer = 'Footer'
}

export type TLogoLocation = keyof typeof LogoLocation;

export const LogoImageClass = {
  Header: 'header__logo',
  Footer: 'footer__logo-link'
} as const;

export const LogoClassName = {
  Header: 'header__logo-link header__logo-link--active',
  Footer: 'footer__logo-link'
} as const;

export const LogoSize = {
  Header: {width: 81, height: 41},
  Footer: {width: 64, height: 33}
};
