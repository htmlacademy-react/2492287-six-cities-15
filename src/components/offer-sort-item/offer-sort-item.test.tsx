import { render, screen } from '@testing-library/react';
import { OfferSortType } from '../../const';
import { OfferSortItem } from '.';
describe('Component: OfferSortItem', () => {
  it('should render correctly', () => {
    const offerSortItemTestId = 'offer-sort-item';
    render(<OfferSortItem sortType={OfferSortType.Popular} isActive={false}/>);
    const offerSortItem = screen.getByTestId(offerSortItemTestId);
    expect(offerSortItem).toBeInTheDocument();
  });
});
