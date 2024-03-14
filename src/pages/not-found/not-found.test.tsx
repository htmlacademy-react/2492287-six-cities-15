import { render, screen } from '@testing-library/react';
import { NotFound } from '.';
import { withHistory } from '../../utils/mock-component';
describe('Component: NotFound', () => {
  it('should render correctly', () => {
    const notFoundTestId = 'not-found';
    const withHistoryComponent = withHistory(<NotFound/>);
    render(withHistoryComponent);
    const notFound = screen.getByTestId(notFoundTestId);
    expect(notFound).toBeInTheDocument();
  });
});
