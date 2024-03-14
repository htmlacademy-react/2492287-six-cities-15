import { FC, } from 'react';

export type TReviewStarProps = {
  defaultValue: number;
  value: number;
  name: string;
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ReviewStar: FC<TReviewStarProps> = ({defaultValue, value, name, onChange}) => {
  const id = `${defaultValue}-stars`;
  return(
    <>
      <input
        className={`${value === 0 ? '' : 'form__rating-input '}visually-hidden`}
        name='rating'
        defaultValue={defaultValue}
        id={id}
        type='radio'
        onChange={onChange}
        data-testid='review-star'
      />
      <label
        htmlFor={id}
        className='reviews__rating-label form__rating-label'
        title={name}
      >
        <svg className='form__star-image' width={37} height={33}>
          <use xlinkHref='#icon-star' />
        </svg>
      </label>
    </>
  );
};
