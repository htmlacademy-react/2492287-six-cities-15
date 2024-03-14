import { render, screen } from '@testing-library/react';
import { ReviewStar } from '.';
describe('Component: ReviewStar', () => {
  it('should render correctly', () => {
    const reviewStarTestId = 'review-star';
    render(<ReviewStar defaultValue={0} value={0} name=''/>);
    const reviewStar = screen.getByTestId(reviewStarTestId);
    expect(reviewStar).toBeInTheDocument();
  });
});
