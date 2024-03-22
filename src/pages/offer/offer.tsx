import { FC, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { OfferList } from '../../components/offer-list';
import { useParams } from 'react-router-dom';
import { APP_TITLE } from '../../const';
import { NotFound } from '../not-found';
import { Map } from '../../components/map';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchNearOffersAction, fetchOfferAction,
  fetchReviewsAction } from '../../store/api-actions';
import { Loading } from '../loading';
import { OfferCardFull } from '../../components/offer-card-full';
import { OfferGallery } from '../../components/offer-gallery/';
import { getImagesForOffer, getIsNearOffersDataLoading, getIsOfferDataLoading, getNearOffersForList,
  getNearOffersForMap, getOffer } from '../../store/offer-data/offer-data-selectors';
import { getIsAuth } from '../../store/user-process/user-process-selectors';
import { clearOffer } from '../../store/action';
import { SimpleSpinner } from '../../components/simple-spinner';

export const Offer: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const offer = useAppSelector(getOffer);
  const images = useAppSelector(getImagesForOffer);
  const nearOffersForMap = useAppSelector(getNearOffersForMap);
  const nearOffersForList = useAppSelector(getNearOffersForList);
  const isAuth = useAppSelector(getIsAuth);
  const isOfferDataLoading = useAppSelector(getIsOfferDataLoading);
  const offerId = id?.trim() ?? '';
  const isNearOffersLoading = useAppSelector(getIsNearOffersDataLoading);
  const nearOffersComponent = isNearOffersLoading
    ? <SimpleSpinner/>
    : <OfferList offers={nearOffersForList} offerCardType={'Near'}/>;

  useEffect(() => {
    let mounted = true;
    if (mounted){
      dispatch(fetchOfferAction(offerId));

    }
    return () => {
      dispatch(clearOffer());
      mounted = false;
    };
  }, [dispatch, offerId]);

  useEffect(() => {
    let mounted = true;
    if (offer && mounted){
      dispatch(fetchNearOffersAction(offerId));
      dispatch(fetchReviewsAction(offerId));
    }
    return () => {
      mounted = false;
    };
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
        <OfferGallery images={images}/>
        <OfferCardFull

          offer={offer}
          isAuth={isAuth}
        />
        <Map
          city={offer.city}
          points={nearOffersForMap}
          selectedPoint={offer}
          mapPositionClassName='offer'
        />
      </section>
      <div className='container'>
        <section className='near-places places'>
          <h2 className='near-places__title'>
            Other places in the neighbourhood
          </h2>
          {nearOffersComponent}
        </section>
      </div>
    </main>
  );
};
