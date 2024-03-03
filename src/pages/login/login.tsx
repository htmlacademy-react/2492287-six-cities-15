import { FC, FormEvent, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { APP_TITLE, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-action';
import { AppRoute } from '../../app';
import { useNavigate } from 'react-router-dom';

export const Login: FC = () => {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  //const errorText = useAppSelector((state) => state.errorText);
  const loginError = useAppSelector((state) => state.loginError);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value
      }));
      if (authorizationStatus === AuthorizationStatus.Auth){
        navigate(AppRoute.Root);
      }
    }
  };

  return (
    <main className='page__main page__main--login'>
      <Helmet>
        <title>{APP_TITLE}: authorization</title>
      </Helmet>
      <div className='page__login-container container'>
        <section className='login'>
          <h1 className='login__title'>Sign in</h1>
          <form className='login__form form' action='#' method='post' onSubmit={handleSubmit}>
            <div className='login__input-wrapper form__input-wrapper'>
              <label className='visually-hidden'>E-mail</label>
              <input
                ref={loginRef}
                className='login__input form__input'
                type='email'
                name='email'
                placeholder='Email'
                required
              />
            </div>
            <div className='login__input-wrapper form__input-wrapper'>
              <label className='visually-hidden'>Password</label>
              <input
                ref={passwordRef}
                className='login__input form__input'
                type='password'
                name='password'
                placeholder='Password'
                required
              />
            </div>
            <button className='login__submit form__submit button' type='submit'>
              Sign in
            </button>
            <div style={{color:'red', marginTop: 10}}>
              {loginError.split('\r\n').map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </form>
        </section>
        <section className='locations locations--login locations--current'>
          <div className='locations__item'>
            <a className='locations__item-link' href='#'>
              <span>Amsterdam</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};
