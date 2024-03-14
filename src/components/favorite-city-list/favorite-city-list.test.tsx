import { render, screen } from '@testing-library/react';
import { FavoriteCityList } from '.';
describe('Component: FavoriteCityList', () => {
  it('should render correctly', () => {
    const expectedText = 'Saved listing';
    render(<FavoriteCityList offers={[]}/>);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
