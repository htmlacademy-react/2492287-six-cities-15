import { getLogoClassName, getLogoImgClassName, getLogoSize } from '.';
import { TLogoLocation } from '../const';

describe('Function: getLogoClassName', () => {
  it('shoud return header__logo-link header__logo-link--active', () => {
    const logoLocation: TLogoLocation = 'Header';
    const result = getLogoClassName(logoLocation);
    expect(result).toBe('header__logo-link header__logo-link--active');
  });

  it('shoud return footer__logo-link', () => {
    const logoLocation: TLogoLocation = 'Footer';
    const result = getLogoClassName(logoLocation);
    expect(result).toBe('footer__logo-link');
  });
});

describe('Function: getLogoImgClassName', () => {
  it('shoud return header__logo', () => {
    const logoLocation: TLogoLocation = 'Header';
    const result = getLogoImgClassName(logoLocation);
    expect(result).toBe('header__logo');
  });

  it('shoud return footer__logo-link', () => {
    const logoLocation: TLogoLocation = 'Footer';
    const result = getLogoImgClassName(logoLocation);
    expect(result).toBe('footer__logo-link');
  });
});

describe('Function: getLogoSize', () => {
  it('shoud return {height: 41, width: 81}', () => {
    const logoLocation: TLogoLocation = 'Header';
    const result = getLogoSize(logoLocation);
    expect(result.height).toBe(41);
    expect(result.width).toBe(81);
  });

  it('shoud return {height: 33, width: 64}', () => {
    const logoLocation: TLogoLocation = 'Footer';
    const result = getLogoSize(logoLocation);
    expect(result.height).toBe(33);
    expect(result.width).toBe(64);
  });
});
