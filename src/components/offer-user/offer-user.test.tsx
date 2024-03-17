import { render, screen } from '@testing-library/react';
import { OfferUser } from '.';
describe('Component: OfferUser', () => {
  it('should render correctly', () => {
    const offerUserTestId = 'offer-user';
    render(<OfferUser user={{name: '', avatarUrl: '', isPro: false}} />);
    const offerUser = screen.getByTestId(offerUserTestId);
    expect(offerUser).toBeInTheDocument();
  });
});
