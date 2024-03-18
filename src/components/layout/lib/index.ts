export const getClassName = (pathname: string, favoritesCount: number): string => {
  switch(pathname){
    case '/login': return 'page--login';
    case '/':
      if (favoritesCount === 0) {
        return 'page--main page__main--favorites-empty';
      }
      return 'page--gray page--main';
    case '/favorites':
      if (favoritesCount === 0) {
        return 'page page--favorites-empty page__main--favorites-empty';
      }
      return '';
    default: return '';
  }
};

export const getIsLoginPath: (pathname: string) => boolean = (pathname) => pathname === '/login';
