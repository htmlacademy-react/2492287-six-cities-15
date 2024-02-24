
import { FC, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { OfferList } from '../../components/offer-list';
import { OfferCardType } from '../../components/offer-card/lib';
import { APP_TITLE, OfferSortType, TCity, TOffer, cities } from '../../const';
import { CityTabList } from '../../components/city-tab-list/city-tab-list';
import { Map } from '../../components/map';
import { OfferSort } from '../../components/offer-sort';

export type TMainProps = {
  offers: TOffer[];
}

export const Main: FC<TMainProps> = ({offers}) => {
  const [city, setCity] = useState<TCity>(cities[0]);
  const [offer, setOffer] = useState<TOffer>();
  const [offerSortType, setOfferSort] = useState<OfferSortType>(OfferSortType.Popular);
  const sortOffers = useMemo(() => {
    switch(offerSortType){
      case OfferSortType.PriceLowHigh: return offers.sort((offer1, offer2) => offer1.price - offer2.price);
      case OfferSortType.PriceHighLow: return offers.sort((offer1, offer2) => offer2.price - offer1.price);
      case OfferSortType.TopRated: return offers.sort((offer1, offer2) => offer2.rating - offer1.rating);
      default: return offers.sort((offer1, offer2) => offer1.id - offer2.id);
    }
  }, [offers, offerSortType]);

  return (
    <main className='page__main page__main--index'>
      <Helmet>
        <title>{APP_TITLE}</title>
      </Helmet>
      <h1 className='visually-hidden'>Cities</h1>
      <div className='tabs'>
        <section className='locations container'>
          <CityTabList activeCity={city} setActiveCity={setCity}/>
        </section>
      </div>
      <div className='cities'>
        <div className='cities__places-container container'>
          <section className='cities__places places'>
            <h2 className='visually-hidden'>Places</h2>
            <b className='places__found'>{offers.length} places to stay in {city.name}</b>
            <OfferSort selectedSort={offerSortType} setSelectedSort={setOfferSort}/>
            <div className='cities__places-list places__list tabs__content'>
              <OfferList offers={sortOffers} offerCardType={OfferCardType.City} setSelectedOffer={setOffer}/>
            </div>
          </section>
          <div className='cities__right-section'>
            <section style={{width: '100%'}}>
              <Map city={cities.find((value) => value.id === offer?.cityId) || cities[0]} selectedPoint={offer} points={offers}/>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};
