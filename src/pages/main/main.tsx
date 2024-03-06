import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { APP_TITLE, TCity } from '../../const';
import { CityTabList } from '../../components/city-tab-list/city-tab-list';
import { changeCity } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getActiveCity, getCityOffers } from '../../store/selectors';
import { CityCard } from '../../components/city-card';
import { CityCardEmpty } from '../../components/city-card-empty';

export const Main: FC = () => {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector(getActiveCity);
  const offers = useAppSelector(getCityOffers);
  const isEmpty = offers.length === 0;

  const handleChangeCity = (city: TCity) => {
    dispatch(changeCity({city}));
  };

  return (
    <main className={`page__main page__main--index${isEmpty ? ' page__main--index-empty' : ''}`}>
      <Helmet>
        <title>{APP_TITLE}</title>
      </Helmet>
      <h1 className='visually-hidden'>Cities</h1>
      <div className='tabs'>
        <section className='locations container'>
          <CityTabList
            activeCity={activeCity}
            onChangeCity={handleChangeCity}
          />
        </section>
      </div>
      <div className='cities'>
        {
          isEmpty
            ? <CityCardEmpty city={activeCity}/>
            : <CityCard city={activeCity} offers={offers}/>
        }
      </div>
    </main>
  );
};

