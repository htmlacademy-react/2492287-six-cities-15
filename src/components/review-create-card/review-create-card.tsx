import { FC, useState } from 'react';
import { ReviewStar } from '../review-star';
import { TReview } from '../../const';
import { validateSubmit } from './lib';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addReviewAction } from '../../store/api-action';
import { getOffer } from '../../store/selectors';

const raitings = [
  {value: 5, name: 'perfect'},
  {value: 4, name: 'good'},
  {value: 3, name: 'not bad'},
  {value: 2, name: 'badly'},
  {value: 1, name: 'terrbly'}
];

export const ReviewCreateCard: FC = () => {
  const [formdata, setFormdata] = useState<TReview>({
    rating: 0,
    comment: '',
    offerId: ''
  });

  const dispatch = useAppDispatch();
  const offer = useAppSelector(getOffer);

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setFormdata({...formdata, [name]: value});
  };

  const textareaChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = event.target;
    setFormdata({...formdata, comment: value});
  };

  const handleSubmit = () => {
    dispatch(addReviewAction({comment: formdata.comment, rating: formdata.rating, offerId: offer ? offer.id : ''}));
  };

  return (
    <form className='reviews__form form' action='#' method='post' onSubmit={handleSubmit}>
      <label className='reviews__label form__label' htmlFor='review'>
        Your review
      </label>
      <div className='reviews__rating-form form__rating'>
        {
          raitings.map((raiting) => (
            <ReviewStar key={raiting.value} defaultValue={raiting.value} name={raiting.name} onChange={inputChangeHandler}/>
          ))
        }
      </div>
      <textarea
        className='reviews__textarea form__textarea'
        id='review'
        name='review'
        placeholder='Tell how was your stay, what you like and what can be improved'
        defaultValue={formdata.comment}
        onChange={textareaChangeHandler}
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
          disabled={!validateSubmit(formdata.comment)}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
