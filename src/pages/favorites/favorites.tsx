import { JSX } from 'react';
import Currency from '../../shared/Currency';
import OfferTypes from '../../shared/OfferTypes';
import FavoriteOfferCard from '../../components/favorite-offer-card/farovite-offer-card';

function Favorites(): JSX.Element{
  return (
    <>
      <main className='page__main page__main--favorites'>
        <div className='page__favorites-container container'>
          <section className='favorites'>
            <h1 className='favorites__title'>Saved listing</h1>
            <ul className='favorites__list'>
              <li className='favorites__locations-items'>
                <div className='favorites__locations locations locations--current'>
                  <div className='locations__item'>
                    <a className='locations__item-link' href='#'>
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className='favorites__places'>
                  <FavoriteOfferCard
                    price={180}
                    currencyType={Currency.EU}
                    isPremium
                    title={'Nice, cozy, warm big bed apartment'}
                    offerType={OfferTypes.Apartment}
                    ratingPercent={100}
                    imageName="apartment-small-03.jpg"
                  />
                  <FavoriteOfferCard
                    price={80}
                    currencyType={Currency.EU}
                    title={'Wood and stone place'}
                    offerType={OfferTypes.Room}
                    ratingPercent={80}
                    imageName="room-small.jpg"
                  />
                </div>
              </li>
              <li className='favorites__locations-items'>
                <div className='favorites__locations locations locations--current'>
                  <div className='locations__item'>
                    <a className='locations__item-link' href='#'>
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className='favorites__places'>
                  <FavoriteOfferCard
                    price={180}
                    currencyType={Currency.EU}
                    title={'White castle'}
                    offerType={OfferTypes.Apartment}
                    ratingPercent={100}
                    imageName="apartment-small-04.jpg"
                  />
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className='footer container'>
        <a className='footer__logo-link' href='main.html'>
          <img
            className='footer__logo'
            src='img/logo.svg'
            alt='6 cities logo'
            width={64}
            height={33}
          />
        </a>
      </footer>
    </>
  );
}

export default Favorites;
