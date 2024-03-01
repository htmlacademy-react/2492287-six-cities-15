import { FC, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { OfferList } from '../../components/offer-list';
import { OfferCardType } from '../../components/offer-card/lib';
import { APP_TITLE, OfferSortType, TCity, TOffer } from '../../const';
import { CityTabList } from '../../components/city-tab-list/city-tab-list';
import { Map } from '../../components/map';
import { OfferSort } from '../../components/offer-sort';
import { changeCity } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getSortedOffers } from './lib';

export const Main: FC = () => {
  const [offer, setOffer] = useState<TOffer | null>(null);
  const [offerSortType, setOfferSort] = useState<OfferSortType>(OfferSortType.Popular);
  const selectedCity = useAppSelector((state) => state.activeCity);
  const dispatch = useAppDispatch();
  const offers = useAppSelector((state) => state.offers);
  const [sortedOffers, setSortedOffers] = useState<TOffer[]>([]);
  const handleChangeCity = (city: TCity) => {
    dispatch(changeCity({city}));
  };

  useEffect(() => {
    setSortedOffers(getSortedOffers(offerSortType, offers.filter((item) => item.city.name === selectedCity.name)));
  }, [selectedCity, offers, offerSortType]);

  return (
    <main className='page__main page__main--index'>
      <Helmet>
        <title>{APP_TITLE}</title>
      </Helmet>
      <h1 className='visually-hidden'>Cities</h1>
      <div className='tabs'>
        <section className='locations container'>
          <CityTabList activeCity={selectedCity} onChangeCity={handleChangeCity}/>
        </section>
      </div>
      <div className='cities'>
        <div className='cities__places-container container'>
          <section className='cities__places places'>
            <h2 className='visually-hidden'>Places</h2>
            <b className='places__found'>{sortedOffers.length} places to stay in {selectedCity?.name}</b>
            <OfferSort selectedSort={offerSortType} setSelectedSort={setOfferSort}/>
            <div className='cities__places-list places__list tabs__content'>
              <OfferList offers={sortedOffers} offerCardType={OfferCardType.City} setSelectedOffer={setOffer}/>
            </div>
          </section>
          <div className='cities__right-section'>
            <section style={{width: '100%'}}>
              <Map city={selectedCity} selectedPoint={offer} points={sortedOffers}/>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

