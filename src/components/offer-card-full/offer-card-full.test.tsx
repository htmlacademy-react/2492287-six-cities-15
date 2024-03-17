import { render, screen } from '@testing-library/react';
import { TOfferFull } from '../../const';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks';
import { OfferCardFull } from '.';
describe('Component: OfferCardFull', () => {
  it('should render correctly', () => {
    const offerCardContainerTestId = 'offer-card-container';
    const expectedOffer: TOfferFull = {
      id: '',
      title: '',
      type: 'Room',
      price: 0,
      previewImage: '',
      city: {
        name: '',
        location: {
          latitude: 0,
          longitude: 0,
          zoom: 0
        }
      },
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 0
      },
      isFavorite: false,
      isPremium: false,
      rating: 0,
      description: '',
      bedrooms: 1,
      goods: [],
      host: {
        name: '',
        avatarUrl: '',
        isPro: false
      },
      images: [],
      maxAdults: 1
    };
    const withHistoryComponent = withHistory(<OfferCardFull offer={expectedOffer} isAuth={false} />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    render(withStoreComponent);
    const offerCardContainer = screen.getByTestId(offerCardContainerTestId);
    expect(offerCardContainer).toBeInTheDocument();
  });
});
