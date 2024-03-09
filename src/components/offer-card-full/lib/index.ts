export const getBedroomsText = (bedrooms: number) => `${bedrooms} ${bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}`;
export const getAdultsText = (adults: number) => `Max ${adults} ${adults > 1 ? 'adults' : 'adult'}`;
