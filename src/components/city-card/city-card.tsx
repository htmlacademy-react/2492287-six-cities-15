import { FC, useCallback, useState } from 'react';
import { TCity, TOffer } from '../../const';
import { useAppSelector } from '../../hooks';
import { OfferSort } from '../offer-sort';
import { OfferList } from '../offer-list';
import { Map } from '../../components/map';
import { getOfferSortType, getSortedOffers } from '../../store/offer-data/offer-data-selectors';

export type TCityCardProps = {
  city: TCity;
  offers: TOffer[];
}

export const CityCard: FC<TCityCardProps> = ({city, offers}) => {
  const [activeOffer, setActiveOffer] = useState<TOffer | null>(null);
  const sortedOffers = useAppSelector(getSortedOffers);
  const offerSortType = useAppSelector(getOfferSortType);

  const handleOfferHover = useCallback((offer: TOffer | null) => {
    setActiveOffer(offer);
  }, []);

  return (
    <div className='cities__places-container container' data-testid='city-card'>
      <section className='cities__places places'>
        <h2 className='visually-hidden'>Places</h2>
        <b className='places__found'>
          {sortedOffers.length} {`place${sortedOffers.length > 1 ? 's' : ''}`} to stay in {city.name}
        </b>
        <OfferSort selectedSort={offerSortType}/>
        <div
          className='cities__places-list places__list tabs__content'
          onMouseEnter={() => handleOfferHover(null)}
        >
          <OfferList
            offers={sortedOffers}
            offerCardType='City'
            onHover={handleOfferHover}
          />
        </div>
      </section>
      <div className='cities__right-section'>
        <Map
          city={city}
          selectedPoint={activeOffer}
          points={offers}
          mapPositionType='cities'
        />
      </div>
    </div>
  );
};
