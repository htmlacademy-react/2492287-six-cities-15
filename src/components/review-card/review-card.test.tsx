import { render, screen } from '@testing-library/react';
import { TReviewFull } from '../../const';
import { ReviewCard } from '.';
describe('Component: ReviewCard', () => {
  it('should render correctly', () => {
    const reviewCardTestId = 'review-card';
    const review: TReviewFull = {
      comment: '',
      rating: 0,
      offerId: '',
      id: '',
      date: '',
      user: {
        name: '',
        avatarUrl: '',
        isPro: false
      }
    };
    render(<ReviewCard review={review}/>);
    const reviewCard = screen.getByTestId(reviewCardTestId);
    expect(reviewCard).toBeInTheDocument();
  });
});
