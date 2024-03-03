import { FC, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { OfferList } from '../../components/offer-list';
import { OfferCardType } from '../../components/offer-card/lib';
import { ReviewCreateCard } from '../../components/review-create-card';
import { ReviewList } from '../../components/review-list';
import { useParams } from 'react-router-dom';
import { APP_TITLE, AuthorizationStatus } from '../../const';
import { NotFound } from '../not-found';
import { Map } from '../../components/map';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchNearOffersAction, fetchOfferAction, fetchReviewsAction } from '../../store/api-action';
import { Loading } from '../loading';
import { loadOffer } from '../../store/action';
import { ButtonFavorite } from '../../components/button-favorite';

export type TOfferProps = {
  nearOfferCardType: OfferCardType;
}

export const Offer: FC<TOfferProps> = ({nearOfferCardType: offerCardType}) => {
  const { id } = useParams();

  const offer = useAppSelector((state) => state.offer);
  const nearOffers = useAppSelector((state) => state.nearOffers);
  const offerLoadingStatus = useAppSelector((state) => state.offerLoadingStatus);
  const dispatch = useAppDispatch();
  const reviews = useAppSelector((state) => state.reviews);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  useEffect(() => {
    dispatch(fetchOfferAction(id ?? ''));
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

  if (offerLoadingStatus === 'loading' && !offer){
    return <Loading/>;
  }else if(offerLoadingStatus === 'failed'){
    return <NotFound/>;
  }else if (!offer){
    return <NotFound/>;
  }

  return (
    <main className='page__main page__main--offer'>
      <Helmet>
        <title>{`${APP_TITLE}: ${offer?.title}`}</title>
      </Helmet>
      <section className='offer'>
        <div className='offer__gallery-container container'>
          <div className='offer__gallery'>
            {offer?.images.map((imageSrc) => (
              <div className='offer__image-wrapper' key={imageSrc}>
                <img
                  className='offer__image'
                  src={imageSrc}
                  alt='Photo studio'
                />
              </div>
            ))}
          </div>
        </div>
        <div className='offer__container container'>
          <div className='offer__wrapper'>
            {
              offer?.isPremium &&
              <div className='offer__mark'>
                <span>Premium</span>
              </div>
            }
            <div className='offer__name-wrapper'>
              <h1 className='offer__name'>
                {offer?.title}
              </h1>
              <ButtonFavorite offer={offer} typeCard='offer' width={31} height={33} isAuth={authorizationStatus === AuthorizationStatus.Auth}/>
            </div>
            <div className='offer__rating rating'>
              <div className='offer__stars rating__stars'>
                <span style={{ width: `${Math.round(offer?.rating * 20)}%` }} />
                <span className='visually-hidden'>Rating</span>
              </div>
              <span className='offer__rating-value rating__value'>{offer?.rating}</span>
            </div>
            <ul className='offer__features'>
              <li className='offer__feature offer__feature--entire'>Apartment</li>
              <li className='offer__feature offer__feature--bedrooms'>
                {`${offer?.bedrooms} ${offer?.bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}`}
              </li>
              <li className='offer__feature offer__feature--adults'>
                {`Max ${offer?.maxAdults} ${offer.maxAdults > 1 ? 'adults' : 'adult'}`}
              </li>
            </ul>
            <div className='offer__price'>
              <b className='offer__price-value'>€{offer?.price}</b>
              <span className='offer__price-text'>&nbsp;night</span>
            </div>
            <div className='offer__inside'>
              <h2 className='offer__inside-title'>What&apos;s inside</h2>
              <ul className='offer__inside-list'>
                {offer?.goods.map((good) => (
                  <li className='offer__inside-item' key={good}>{good}</li>
                ))}
              </ul>
            </div>
            <div className='offer__host'>
              <h2 className='offer__host-title'>Meet the host</h2>
              <div className='offer__host-user user'>
                <div className='offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper'>
                  <img
                    className='offer__avatar user__avatar'
                    src={offer?.host.avatarUrl}
                    width={74}
                    height={74}
                    alt='Host avatar'
                  />
                </div>
                <span className='offer__user-name'>{offer?.host.name}</span>
                <span className='offer__user-status'>{offer?.host.isPro ? 'Pro' : ''}</span>
              </div>
              <div className='offer__description'>
                <p className='offer__text'> {offer?.description}</p>
              </div>
            </div>
            <section className='offer__reviews reviews'>
              <ReviewList reviews={reviews}/>
              {
                authorizationStatus === AuthorizationStatus.Auth &&
                <ReviewCreateCard/>
              }
            </section>
          </div>
        </div>
        <section style={{margin: 'auto', marginBottom: 50, width: 1144, height: 579}} >
          <Map city={offer.city} selectedPoint={null} points={nearOffers}/>
        </section>
      </section>
      <div className='container'>
        <section className='near-places places'>
          <h2 className='near-places__title'>
            Other places in the neighbourhood
          </h2>
          <OfferList offers={nearOffers} offerCardType={offerCardType} />
        </section>
      </div>
    </main>
  );
};
