
import { FC, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { OfferList } from '../../components/offer-list';
import { OfferCardType } from '../../components/offer-card/lib';
import { APP_TITLE, OfferSortType, TCity, TOffer } from '../../const';
import { CityTabList } from '../../components/city-tab-list/city-tab-list';
import { Map } from '../../components/map';
import { OfferSort } from '../../components/offer-sort';
import { changeCity, fillOffers } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getSortedOffers } from './lib';

export type TMainProps = {
  offers: TOffer[];
}

export const Main: FC<TMainProps> = ({offers}) => {
  const [offer, setOffer] = useState<TOffer>();
  const [offerSortType, setOfferSort] = useState<OfferSortType>(OfferSortType.Popular);
  const selectedCity = useAppSelector((state) => state.activeCity);
  const sortOffers = useAppSelector((state) => state.offers);
  const dispatch = useAppDispatch();

  const handleChangeCity = (city: TCity) => {
    dispatch(changeCity({city}));
    const sorted = getSortedOffers(offerSortType, offers.filter((item) => item.cityId === city.id));
    dispatch(fillOffers({offers: sorted}));
  };

  useEffect(() =>{
    dispatch(
      fillOffers({
        offers: getSortedOffers(offerSortType, offers.filter((item) => item.cityId === selectedCity.id))
      })
    );
  }, [offerSortType, selectedCity.id, dispatch, offers]);

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
            <b className='places__found'>{sortOffers.length} places to stay in {selectedCity.name}</b>
            <OfferSort selectedSort={offerSortType} setSelectedSort={setOfferSort}/>
            <div className='cities__places-list places__list tabs__content'>
              <OfferList offers={sortOffers} offerCardType={OfferCardType.City} setSelectedOffer={setOffer}/>
            </div>
          </section>
          <div className='cities__right-section'>
            <section style={{width: '100%'}}>
              <Map city={selectedCity} selectedPoint={offer} points={sortOffers}/>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

