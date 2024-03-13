import { FC } from 'react';
import { TUser } from '../../const';

export type TOfferUserProps = {
  user: TUser;
}

export const OfferUser: FC<TOfferUserProps> = ({user}) => (
  <div className='offer__host-user user'>
    <div className={`offer__avatar-wrapper ${user.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
      <img
        className='offer__avatar user__avatar'
        src={user.avatarUrl}
        width={74}
        height={74}
        alt='Host avatar'
      />
    </div>
    <span className='offer__user-name'>{user.name}</span>
    <span className='offer__user-status'>{user.isPro ? 'Pro' : ''}</span>
  </div>
);
