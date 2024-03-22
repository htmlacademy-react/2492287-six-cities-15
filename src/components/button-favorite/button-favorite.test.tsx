import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { ButtonFavorite } from '.';
import { makeFakeStore } from '../../utils/mocks';

describe('Component: ButtonFavorite', () => {


  it('should render correctly', () => {
    const buttonFavoriteTestId = 'button-favorite';
    const withHistoryComponent = withHistory(
      <ButtonFavorite
        height={10}
        width={10}
        offerId=''
        isFavorite={false}
        buttonTypeClassName='offer'
        isAuth={false}
      />
    );
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    render(withStoreComponent);
    const buttonFavorite = screen.getByTestId(buttonFavoriteTestId);
    expect(buttonFavorite).toBeInTheDocument();
  });
});
