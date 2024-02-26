import { OfferTypes, TCity, TOffer, cities } from '../../const';

export const generaterandomNumber = (min: number, max: number) => Math.random() * (max - min) + min;
export const generateRandomInt = (min: number, max: number) => Math.floor(generaterandomNumber(min, max));
export const generateRandomBoolean = () => Math.random() >= 0.5;
const names = [
  'Golden Luxury Resort',
  'Glorious Panorama Resort & Spa',
  'Riverside Bliss Hotel',
  'Pleasant Memorial Hotel',
  'Viridian Valley Hotel & Spa',
  'Tranquil Gulf Hotel & Spa',
  'King Cove Hotel',
  'Rose Elephant Resort & Spa',
  'Lord Luxury Hotel',
  'Lord Pool Resort',
  'Glorious Cottage Hotel & Spa',
  'Primal Spring Motel',
  'Royal Mirror Resort',
  'Brass Safari Resort & Spa',
  'Majestic Gorge Resort',
  'Marina Island Hotel',
  'Supreme Orb Motel',
  'Gentle Comfort Hotel'
];
export const generateRandomTitle = () => names[generateRandomInt(0, names.length)];
export const generateRandomOfferType = () => {
  switch(generateRandomInt(1, 5)){
    case 2: return OfferTypes.Hotel;
    case 3: return OfferTypes.House;
    case 4: return OfferTypes.Room;
    default: return OfferTypes.Apartment;
  }
};

export const generateOffers = (count: number) => {
  const result: Array<TOffer> = [];
  for (let i = 1; i <= count; i++){
    const city: TCity = cities[generateRandomInt(0, 6)];
    const offerType = generateRandomOfferType();
    result.push({
      id: i,
      price: generateRandomInt(10, 300),
      isPremium: generateRandomBoolean(),
      title: generateRandomTitle(),
      offerType: generateRandomOfferType(),
      rating: generateRandomInt(1, 6),
      imageName: offerType === OfferTypes.Apartment ? 'apartment-01.jpg' : 'room.jpg',
      cityId: city.id,
      isBookmark: generateRandomBoolean(),
      lat: generaterandomNumber(city.lat - 0.05, city.lat + 0.05),
      lng: generaterandomNumber(city.lng - 0.05, city.lng + 0.05)
    });
  }
  return result;
};
