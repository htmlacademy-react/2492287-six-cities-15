import { render, screen } from '@testing-library/react';
import { Rating } from '.';
describe('Component: Rating', () => {
  it('should render correctly', () => {
    const expectedText = 'Rating';
    render(<Rating objectType='offer' rating={0} />);
    expect(screen.getByText(expectedText)).toBeInTheDocument();

  });
});
