import { AppRoute } from '../../../app';

const PageClass = {
  Page: 'page',
  PageMain: 'page--main',
  PageGray: 'page-gray',
  PageLogin: 'page--login',
  PageFavoritesEmpty: 'page--favorites-empty'
} as const;

export const getClassName = (pathname: string, favoritesCount: number): string => {
  switch(pathname){
    case AppRoute.Login: return `${PageClass.Page} ${PageClass.PageGray} ${PageClass.PageLogin}`;
    case AppRoute.Root: return `${PageClass.Page} ${PageClass.PageMain} ${PageClass.PageGray}`;
    case AppRoute.Favorites:
      if (favoritesCount === 0) {
        return `${PageClass.Page} ${PageClass.PageFavoritesEmpty}`;
      }
      return PageClass.Page;
    default: return PageClass.Page;
  }
};

export const getIsLoginPath: (pathname: string) => boolean = (pathname) => pathname === AppRoute.Login.toString();
