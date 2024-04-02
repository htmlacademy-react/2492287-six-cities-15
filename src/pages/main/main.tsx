import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { APP_TITLE } from '../../const';
import { CityLinkList } from '../../components/city-link-list/city-link-list';
import { useAppSelector } from '../../hooks';
import { CityCard } from '../../components/city-card';
import { CityCardEmpty } from '../../components/city-card-empty';
import { getActiveCity, getCityOffers } from '../../store/offer-data/offer-data-selectors';

export const Main: FC = () => {
  const activeCity = useAppSelector(getActiveCity);
  const offers = useAppSelector(getCityOffers);
  const isEmpty = offers.length === 0;
  const cityCardComponent = isEmpty
    ? <CityCardEmpty city={activeCity}/>
    : <CityCard city={activeCity} offers={offers}/>;

  return (
    <main
      className={`page__main page__main--index${isEmpty ? ' page__main--index-empty' : ''}`}
      data-testid='main'
    >
      <Helmet>
        <title>{APP_TITLE}</title>
      </Helmet>
      <h1 className='visually-hidden'>Cities</h1>
      <div className='tabs'>
        <section className='locations container'>
          <CityLinkList
            activeCity={activeCity}
          />
        </section>
      </div>
      <div className='cities'>
        {cityCardComponent}
      </div>
    </main>
  );
};

