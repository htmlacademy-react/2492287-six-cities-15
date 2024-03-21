import { render, screen } from '@testing-library/react';
import { OfferSortType } from '../../const';
import { OfferSortItem } from '.';
import userEvent from '@testing-library/user-event';
describe('Component: OfferSortItem', () => {
  it('should render correctly', () => {
    const offerSortItemTestId = 'offer-sort-item';
    render(<OfferSortItem sortType={OfferSortType.Popular} isActive={false}/>);
    const offerSortItem = screen.getByTestId(offerSortItemTestId);
    expect(offerSortItem).toBeInTheDocument();
  });
  it('onChange should called when open', async () => {
    const mockHandleClick = vi.fn();
    const offerSortItemTestId = 'offer-sort-item';
    render(<OfferSortItem sortType={OfferSortType.Popular} isActive={false} onSelectSortType={mockHandleClick}/>);
    await userEvent.click(screen.getByTestId(offerSortItemTestId));

    expect(mockHandleClick).toBeCalled();
  });
});
