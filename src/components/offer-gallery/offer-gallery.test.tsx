import { render, screen } from '@testing-library/react';
import { OfferGallery } from '.';
describe('Component: OfferGallery', () => {
  it('should render correctly', () => {
    const offerGalleryTestId = 'offer-gallery';
    const offerImageTestId = 'offer-image';
    const images = ['1', '2'];
    render(<OfferGallery images={images}/>);
    const offerGallery = screen.getByTestId(offerGalleryTestId);
    const offerImage = screen.getAllByTestId(offerImageTestId);
    expect(offerGallery).toBeInTheDocument();
    expect(offerImage.length).toBe(images.length);
  });
});
