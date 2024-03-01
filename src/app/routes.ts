export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}

export enum ApiRoute {
  Offers = '/offers',
  Offer = '/offers/:id',
  Login = '/login',
  Logout = '/logout',
  NearOffers = '/offers/:offerId/nearby',
  Favorites = '/favorite',
  FavoriteSet = 'favorite/:offerId/:status',
  Comments = '/comments/:offerId'
}
