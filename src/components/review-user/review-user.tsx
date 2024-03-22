import { FC } from 'react';
import { TUser } from '../../const';

export type TReviewUserProps = {
  user: TUser;
}

const ImageSize = {
  Width: 54,
  Height: 54
};

export const ReviewUser: FC<TReviewUserProps> = ({user}) => (
  <div className='reviews__user user' data-testid='review-user'>
    <div className='reviews__avatar-wrapper user__avatar-wrapper'>
      <img
        className='reviews__avatar user__avatar'
        src={user.avatarUrl}
        width={ImageSize.Width}
        height={ImageSize.Height}
        alt='Reviews avatar'
      />
    </div>
    <span className='reviews__user-name'>{user.name}</span>
  </div>
);
