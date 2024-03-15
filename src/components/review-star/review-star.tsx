import { FC } from 'react';

export type TReviewStarProps = {
  defaultValue: number;
  isChecked: boolean;
  name: string;
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ReviewStar: FC<TReviewStarProps> = ({defaultValue, isChecked, name, onChange}) => {
  const id = `${defaultValue}-stars`;

  return(
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={defaultValue}
        id={id}
        type="radio"
        onChange={onChange}
        data-testid='review-star'
        checked={isChecked}
      />
      <label
        htmlFor={id}
        className="reviews__rating-label form__rating-label"
        title={name}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>

    </>
  );
};
