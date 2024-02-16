import { JSX } from 'react';
import Logo from '../../components/Logo/logo';

function NotFound(): JSX.Element{
  return (
    <div>
      <Logo/>
      <h1> 404. Page Not Found </h1>
      Перейти на <a href='/'>главную страницу</a>
    </div>
  );
}

export default NotFound;
