
import { JSX } from 'react';
import Currency from '../../shared/Currency';
import OfferTypes from '../../shared/OfferTypes';
import CityOfferCard from '../../components/offer-card/offer-card';
import { Helmet } from 'react-helmet-async';

type MainProps = {
  offerCount: number;
}

function Main({offerCount}: MainProps): JSX.Element{
  return (
    <main className='page__main page__main--index'>
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <h1 className='visually-hidden'>Cities</h1>
      <div className='tabs'>
        <section className='locations container'>
          <ul className='locations__list tabs__list'>
            <li className='locations__item'>
              <a className='locations__item-link tabs__item' href='#'>
                <span>Paris</span>
              </a>
            </li>
            <li className='locations__item'>
              <a className='locations__item-link tabs__item' href='#'>
                <span>Cologne</span>
              </a>
            </li>
            <li className='locations__item'>
              <a className='locations__item-link tabs__item' href='#'>
                <span>Brussels</span>
              </a>
            </li>
            <li className='locations__item'>
              <a className='locations__item-link tabs__item tabs__item--active'>
                <span>Amsterdam</span>
              </a>
            </li>
            <li className='locations__item'>
              <a className='locations__item-link tabs__item' href='#'>
                <span>Hamburg</span>
              </a>
            </li>
            <li className='locations__item'>
              <a className='locations__item-link tabs__item' href='#'>
                <span>Dusseldorf</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className='cities'>
        <div className='cities__places-container container'>
          <section className='cities__places places'>
            <h2 className='visually-hidden'>Places</h2>
            <b className='places__found'>{offerCount} places to stay in Amsterdam</b>
            <form className='places__sorting' action='#' method='get'>
              <span className='places__sorting-caption'>Sort by</span>
              <span className='places__sorting-type' tabIndex={0}>
                Popular
                <svg className='places__sorting-arrow' width={7} height={4}>
                  <use xlinkHref='#icon-arrow-select' />
                </svg>
              </span>
              <ul className='places__options places__options--custom places__options--opened'>
                <li
                  className='places__option places__option--active'
                  tabIndex={0}
                >
                  Popular
                </li>
                <li className='places__option' tabIndex={0}>
                  Price: low to high
                </li>
                <li className='places__option' tabIndex={0}>
                  Price: high to low
                </li>
                <li className='places__option' tabIndex={0}>
                  Top rated first
                </li>
              </ul>
            </form>
            <div className='cities__places-list places__list tabs__content'>
              <CityOfferCard
                price={120}
                currencyType={Currency.EU}
                isPremium
                title={'Beautiful & luxurious apartment at great location'}
                offerType={OfferTypes.Apartment}
                ratingPercent={80}
                imageName="apartment-01.jpg"
              />
              <CityOfferCard
                price={80}
                currencyType={Currency.EU}
                title={'Wood and stone place'}
                offerType={OfferTypes.Room}
                isBookmark
                imageName="room.jpg"
                ratingPercent={80}
              />
              <CityOfferCard
                price={132}
                currencyType={Currency.EU}
                title={'Canal View Prinsengracht'}
                offerType={OfferTypes.Apartment}
                imageName="apartment-02.jpg"
                ratingPercent={80}
              />
              <CityOfferCard
                price={180}
                currencyType={Currency.EU}
                isPremium
                title={'Nice, cozy, warm big bed apartment'}
                offerType={OfferTypes.Apartment}
                imageName="apartment-03.jpg"
                ratingPercent={100}
              />
              <CityOfferCard
                price={80}
                currencyType={Currency.EU}
                isBookmark
                title={'Wood and stone place'}
                offerType={OfferTypes.Room}
                imageName="room.jpg"
                ratingPercent={80}
              />
            </div>
          </section>
          <div className='cities__right-section'>
            <section className='cities__map map' />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
