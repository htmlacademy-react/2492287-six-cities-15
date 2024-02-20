import { FC, useState } from 'react';
import { ReviewStar } from '../review-star';

type TReviewData = {
  rating: number;
  review: string;
}

export const ReviewCreateCard: FC = () => {
  const [formdata, setFormdata] = useState<TReviewData>({
    rating: 0,
    review: ''
  });

  const inputChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;
    setFormdata({...formdata, [name]: value});
  };

  const textareaChangeHandler = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormdata({...formdata, [name]: value});
  };

  return (
    <form className='reviews__form form' action='#' method='post'>
      <label className='reviews__label form__label' htmlFor='review'>
        Your review
      </label>
      <div className='reviews__rating-form form__rating'>
        <ReviewStar defaultValue={5} name='perfect' onChange={inputChangeHandler}/>
        <ReviewStar defaultValue={4} name='good' onChange={inputChangeHandler}/>
        <ReviewStar defaultValue={3} name='not bad' onChange={inputChangeHandler}/>
        <ReviewStar defaultValue={2} name='badly' onChange={inputChangeHandler}/>
        <ReviewStar defaultValue={1} name='terribly' onChange={inputChangeHandler}/>
      </div>
      <textarea
        className='reviews__textarea form__textarea'
        id='review'
        name='review'
        placeholder='Tell how was your stay, what you like and what can be improved'
        defaultValue={formdata.review}
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
          disabled
        >
          Submit
        </button>
      </div>
    </form>
  );
};
