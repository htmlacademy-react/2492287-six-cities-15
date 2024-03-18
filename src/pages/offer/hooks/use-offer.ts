import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getOffer } from '../../../store/offer-data/selectors';
import { fetchOfferAction } from '../../../store/api-actions';
import { clearOffer } from '../../../store/action';

export const useOffer = (offerId: string) => {
  const offer = useAppSelector(getOffer);
  const dispatch = useAppDispatch();
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
  return offer;
};
