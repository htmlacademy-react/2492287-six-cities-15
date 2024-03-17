export enum OfferCardType {
  City = 'City',
  Favorite = 'Favorite',
  Near = 'Near'
}

export type TOfferCardType = keyof typeof OfferCardType;

export type TImageSize = {
  width: number;
  height: number;
}
