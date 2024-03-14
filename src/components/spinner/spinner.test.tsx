import { render, screen } from '@testing-library/react';
import { Spinner } from '.';
describe('Component: Spinner', () => {
  it('should render correctly', () => {
    const expectedText = 'test text';
    render(<Spinner text={expectedText}/>);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
