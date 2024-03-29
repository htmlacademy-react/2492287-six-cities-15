import { render, screen } from '@testing-library/react';
import { ReviewList } from '.';
describe('Component: ReviewList', () => {
  it('should render correctly', () => {
    const reviewListTestId = 'review-list';
    render(<ReviewList reviews={[]} reviewCount={0}/>);
    const reviewList = screen.getByTestId(reviewListTestId);
    expect(reviewList).toBeInTheDocument();
  });
});
