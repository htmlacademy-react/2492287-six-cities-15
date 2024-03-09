import { FC, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { OfferList } from '../../components/offer-list';
import { OfferCardType } from '../../components/offer-card/lib';
import { useParams } from 'react-router-dom';
import { APP_TITLE } from '../../const';
import { NotFound } from '../not-found';
import { Map } from '../../components/map';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchNearOffersAction, fetchOfferAction, fetchReviewsAction } from '../../store/api-action';
import { Loading } from '../loading';
import { OfferFullCard } from '../../components/offer-card-full';
import { OfferGallery } from '../../components/offer-gallery/';
import { getIsOfferDataLoading, getNearOffers, getOffer } from '../../store/offer-data/selectors';
import { getIsAuth } from '../../store/user-process/selectors';
import { clearOffer } from '../../store/action';

export type TOfferProps = {
  nearOfferCardType: OfferCardType;
}

export const Offer: FC<TOfferProps> = ({nearOfferCardType}) => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const offer = useAppSelector(getOffer);
  const nearOffers = useAppSelector(getNearOffers);
  const isAuth = useAppSelector(getIsAuth);
  const isOfferDataLoading = useAppSelector(getIsOfferDataLoading);
  const offerId = id?.trim() ?? '';

  useEffect(() => {
    dispatch(fetchOfferAction(offerId));
    return () => {
      dispatch(clearOffer());
    };
  }, [dispatch, offerId]);

  useEffect(() => {
    if (offer){
      dispatch(fetchNearOffersAction(offerId));
      dispatch(fetchReviewsAction(offerId));
    }
  }, [offerId, dispatch, offer]);

  if(offerId === '') {
    return <NotFound/>;
  }
  if (isOfferDataLoading) {
    return <Loading/>;
  }
  if (!offer) {
    return <NotFound/>;
  }

  return (
    <main className='page__main page__main--offer'>
      <Helmet>
        <title>{`${APP_TITLE}: ${offer?.title}`}</title>
      </Helmet>
      <section className='offer'>
        <OfferGallery images={offer.images}/>
        <OfferFullCard
          offer={offer}
          isAuth={isAuth}
        />
        <section style={{margin: 'auto', marginBottom: 50, width: 1144, height: 579}} >
          <Map city={offer.city} points={nearOffers}/>
        </section>
      </section>
      <div className='container'>
        <section className='near-places places'>
          <h2 className='near-places__title'>
            Other places in the neighbourhood
          </h2>
          <OfferList
            offers={nearOffers}
            offerCardType={nearOfferCardType}
          />
        </section>
      </div>
    </main>
  );
};
