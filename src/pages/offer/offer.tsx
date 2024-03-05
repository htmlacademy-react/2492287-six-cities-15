import { FC, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { OfferList } from '../../components/offer-list';
import { OfferCardType } from '../../components/offer-card/lib';
import { useParams } from 'react-router-dom';
import { APP_TITLE, AuthorizationStatus } from '../../const';
import { NotFound } from '../not-found';
import { Map } from '../../components/map';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchNearOffersAction, fetchOfferAction, fetchReviewsAction } from '../../store/api-action';
import { Loading } from '../loading';
import { loadOffer } from '../../store/action';
import { getAuthorizationStatus, getNearOffers, getOffer, getIsOfferLoading } from '../../store/selectors';
import { OfferInfo } from '../../components/offer-info';
import { OfferGallery } from '../../components/offer-gallery/offer-gallery';

export type TOfferProps = {
  nearOfferCardType: OfferCardType;
}

export const Offer: FC<TOfferProps> = ({nearOfferCardType: offerCardType}) => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const offer = useAppSelector(getOffer);
  const nearOffers = useAppSelector(getNearOffers);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isOfferLoading = useAppSelector(getIsOfferLoading);

  useEffect(() => {
    dispatch(fetchOfferAction((id?.trim()) ?? ''));
    return () => {
      dispatch(loadOffer(null));
    };
  }, [id, dispatch]);

  useEffect(() => {
    if (offer){
      dispatch(fetchNearOffersAction(id ?? ''));
      dispatch(fetchReviewsAction(id ?? ''));
    }
  }, [id, dispatch, offer]);

  if(id?.trim() === '') {
    return <NotFound/>;
  }
  if (isOfferLoading) {
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
        <OfferInfo offer={offer} isAuth={authorizationStatus === AuthorizationStatus.Auth}/>
        <section style={{margin: 'auto', marginBottom: 50, width: 1144, height: 579}} >
          <Map city={offer.city} selectedPoint={null} points={nearOffers}/>
        </section>
      </section>
      <div className='container'>
        <section className='near-places places'>
          <h2 className='near-places__title'>
            Other places in the neighbourhood
          </h2>
          <OfferList offers={nearOffers} offerCardType={offerCardType} onHover={() => {}}/>
        </section>
      </div>
    </main>
  );
};
