import { FC, useEffect, useState } from 'react';
import { ReviewStar } from '../review-star';
import { TReview } from '../../const';
import { validateSubmit } from './lib';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addReviewAction } from '../../store/api-action';
import { getOffer } from '../../store/offer-data/selectors';
import { getAddReviewStatus } from '../../store/review-data/selectors';

const raitings = [
  {value: 5, name: 'perfect'},
  {value: 4, name: 'good'},
  {value: 3, name: 'not bad'},
  {value: 2, name: 'badly'},
  {value: 1, name: 'terrbly'}
];

const initialState = { rating: 0, comment: '', offerId: ''};

export const ReviewCreateCard: FC = () => {
  const [formdata, setFormdata] = useState<TReview>(initialState);

  const dispatch = useAppDispatch();
  const offer = useAppSelector(getOffer);

  const addReviewStatus = useAppSelector(getAddReviewStatus);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target;
    setFormdata({...formdata, rating: Number(value)});
  };

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = event.target;
    setFormdata({...formdata, comment: value});
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addReviewAction({comment: formdata.comment, rating: formdata.rating, offerId: offer ? offer.id : ''}));
  };

  useEffect(() => {
    if (addReviewStatus !== 'loading') {
      setFormdata(initialState);
    }
  }, [addReviewStatus]);

  return (
    <form
      className='reviews__form form'
      action='#'
      method='post'
      onSubmit={handleFormSubmit}
      data-testid='review-create-card'
    >
      <label className='reviews__label form__label' htmlFor='review'>
        Your review
      </label>
      <div className='reviews__rating-form form__rating'>
        {
          raitings.map((rating) => (
            <ReviewStar
              key={rating.value}
              isChecked={formdata.rating === rating.value}
              defaultValue={rating.value}
              name={rating.name}
              onChange={handleInputChange}
            />
          ))
        }
      </div>
      <textarea
        className='reviews__textarea form__textarea'
        id='review'
        name='review'
        placeholder='Tell how was your stay, what you like and what can be improved'
        value={formdata.comment}
        onChange={handleTextareaChange}
      />
      <div className='reviews__button-wrapper'>
        <p className='reviews__help'>
          To submit review please make sure to set{' '}
          <span className='reviews__star'>rating</span> and describe
          your stay with at least{' '}
          <b className='reviews__text-amount'>50 characters</b>.
        </p>
        <button
          className='reviews__submit form__submit button'
          type='submit'
          disabled={!validateSubmit(formdata.comment, formdata.rating) || addReviewStatus === 'loading'}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
