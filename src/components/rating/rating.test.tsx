import { render, screen } from '@testing-library/react';
import { Rating } from '.';
describe('Component: Rating', () => {
  it('should render correctly', () => {
    const expectedText = 'Rating';
    render(<Rating rating={0} cardTypeClassName='place-card' />);
    expect(screen.getByText(expectedText)).toBeInTheDocument();

  });
});
