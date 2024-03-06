import { FC, useState } from 'react';
import { TCity, TOffer } from '../../const';
import { useAppSelector } from '../../hooks';
import { getOfferSortType, getSortedOffers } from '../../store/selectors';
import { OfferCardType } from '../offer-card/lib';
import { OfferSort } from '../offer-sort';
import { OfferList } from '../offer-list';
import { Map } from '../../components/map';

export type TCityCardProps = {
  city: TCity;
  offers: TOffer[];
}

export const CityCard: FC<TCityCardProps> = ({city, offers}) => {
  const [activeOffer, setActiveOffer] = useState<TOffer | null>(null);
  const sortedOffers = useAppSelector(getSortedOffers);
  const offerSortType = useAppSelector(getOfferSortType);

  const handleOfferHover = (offer: TOffer | null) => {
    setActiveOffer(offer);
  };
  return (
    <div className='cities__places-container container'>
      <section className='cities__places places'>
        <h2 className='visually-hidden'>Places</h2>
        <b className='places__found'>
          {sortedOffers.length} places to stay in {city.name}
        </b>
        <OfferSort selectedSort={offerSortType}/>
        <div className='cities__places-list places__list tabs__content'>
          <OfferList
            offers={sortedOffers}
            offerCardType={OfferCardType.City}
            onHover={handleOfferHover}
          />
        </div>
      </section>
      <div className='cities__right-section'>
        <section style={{width: '100%'}}>
          <Map city={city} selectedPoint={activeOffer} points={offers}/>
        </section>
      </div>
    </div>
  );
};
