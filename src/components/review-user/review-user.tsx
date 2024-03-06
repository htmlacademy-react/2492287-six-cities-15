import { FC } from 'react';
import { TUser } from '../../const';

export type TReviewUserProps = {
  user: TUser;
}

export const ReviewUser: FC<TReviewUserProps> = ({user}) => (
  <div className='reviews__user user'>
    <div className='reviews__avatar-wrapper user__avatar-wrapper'>
      <img
        className='reviews__avatar user__avatar'
        src={user.avatarUrl}
        width={54}
        height={54}
        alt='Reviews avatar'
      />
    </div>
    <span className='reviews__user-name'>{user.name}</span>
  </div>
);
