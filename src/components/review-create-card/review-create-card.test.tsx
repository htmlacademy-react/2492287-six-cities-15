import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks';
import { ReviewCreateCard } from '.';
describe('Component: ReviewCreateCard', () => {
  it('should render correctly', () => {
    const reviewCreateCardTestId = 'review-create-card';
    const withHistoryComponent = withHistory(<ReviewCreateCard/>);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    render(withStoreComponent);
    const reviewCreateCard = screen.getByTestId(reviewCreateCardTestId);
    expect(reviewCreateCard).toBeInTheDocument();
  });
});
