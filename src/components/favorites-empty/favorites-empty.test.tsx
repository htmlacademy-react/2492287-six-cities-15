import { render, screen } from '@testing-library/react';
import { FavoritesEmpty } from '.';
describe('Component: SimpleSpinner', () => {
  it('should render correctly', () => {
    render(<FavoritesEmpty/>);
    expect(screen.getByText(/Nothing yet saved/i)).toBeInTheDocument();
  });
});
