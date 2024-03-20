import { FC, FormEvent, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { APP_TITLE, cities } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { randomInt } from './lib';
import { changeCity } from '../../store/action';
import { CityLink } from '../../components/city-link';
import { Navigate, useNavigate } from 'react-router-dom';
import { getIsAuth } from '../../store/user-process/selectors';
import { AppRoute } from '../../app';

export const Login: FC = () => {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const [randomCity, setRandomCity] = useState(cities[0]);
  const isAuth = useAppSelector(getIsAuth);

  useEffect(() => {
    const city = cities[randomInt(0, cities.length - 1)];
    setRandomCity(city);
  }, []);

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current && passwordRef.current) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value
      }));
    }
  };

  if (isAuth){
    return (
      <Navigate to={AppRoute.Root} />
    );
  }
  return (
    <main className='page__main page__main--login' data-testid='login'>
      <Helmet>
        <title>{APP_TITLE}: authorization</title>
      </Helmet>
      <div className='page__login-container container'>
        <section className='login'>
          <h1 className='login__title'>Log in</h1>
          <form
            className='login__form form'
            action='#'
            method='post'
            onSubmit={handleFormSubmit}
          >
            <div className='login__input-wrapper form__input-wrapper'>
              <label className='visually-hidden'>E-mail</label>
              <input
                ref={loginRef}
                className='login__input form__input'
                type="email"
                name="email"
                placeholder="Email"
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
                pattern="(?=^.{2,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Za-z]).*"
              />
            </div>
            <button className='login__submit form__submit button' type='submit'>
              Log in
            </button>
          </form>
        </section>
        <section className='locations locations--login locations--current'>

          <div className='locations__item'>
            <CityLink
              city={randomCity}
              isActive={false}
              onChangeCity={() => dispatch(changeCity(randomCity))}
            />
          </div>
        </section>
      </div>
    </main>
  );
};
