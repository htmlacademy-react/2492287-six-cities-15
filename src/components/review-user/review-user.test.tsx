import { render, screen } from '@testing-library/react';
import { ReviewUser } from '.';
describe('Component: ReviewUser', () => {
  it('should render correctly', () => {
    const reviewUserTestId = 'review-user';
    render(<ReviewUser user={{ name: '', avatarUrl: '', isPro: false}}/>);
    const reviewUser = screen.getByTestId(reviewUserTestId);
    expect(reviewUser).toBeInTheDocument();
  });
});
