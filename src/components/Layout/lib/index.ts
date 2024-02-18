export const getClassName = (pathname: string): string => {
  switch(pathname){
    case '/login': return 'page--gray page--login';
    case '/': return 'page--gray page--main';
    default: return '';
  }
};

export const getIsLoginPath: (pathname: string) => boolean = (pathname) => pathname === '/login';
