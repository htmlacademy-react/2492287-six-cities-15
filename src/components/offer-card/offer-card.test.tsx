import { render, screen } from '@testing-library/react';
import { TOffer } from '../../const';
import { withHistory, withStore } from '../../utils/mock-component';
import { OfferCard } from '.';
import { makeFakeStore } from '../../utils/mocks';
import userEvent from '@testing-library/user-event';
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

  it('onChange should called when user choose answer', async () => {
    const mockHandleHover = vi.fn();
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

    const withHistoryComponent = withHistory(
      <OfferCard offer={expectedOffer} offerCardType='City' onHover={mockHandleHover}/>
    );
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    render(withStoreComponent);
    await userEvent.hover(screen.getByTestId('offer-card'));

    expect(mockHandleHover).toBeCalled();
  });

});
