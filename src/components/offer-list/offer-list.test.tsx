import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { OfferList } from '.';
import { makeFakeStore } from '../../utils/mocks';
describe('Component: OfferList', () => {
  it('should render correctly', () => {
    const offerListTestId = 'offer-list';
    const withHistoryComponent = withHistory(<OfferList offers={[]} offerCardType={'City'}/>);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    render(withStoreComponent);
    const offerList = screen.getByTestId(offerListTestId);
    expect(offerList).toBeInTheDocument();
  });
});
