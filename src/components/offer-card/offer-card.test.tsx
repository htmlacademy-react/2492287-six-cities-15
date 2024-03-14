import { render, screen } from '@testing-library/react';
import { TOffer } from '../../const';
import { withHistory, withStore } from '../../utils/mock-component';
import { OfferCard } from '.';
import { makeFakeStore } from '../../utils/mocks';
describe('Component: OfferCard', () => {
  it('should render correctly', () => {
    const offerCardTestId = 'offer-card';
    const expectedOffer: TOffer = {
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
      rating: 0
    };
    const withHistoryComponent = withHistory(<OfferCard offer={expectedOffer} offerCardType={'City'} />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    render(withStoreComponent);
    const offerCard = screen.getByTestId(offerCardTestId);
    expect(offerCard).toBeInTheDocument();
  });
});
