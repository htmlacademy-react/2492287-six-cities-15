export const validateSubmit = (value: string, rating: number) =>
  value.length >= 50 && value.length <= 300 && rating >= 1 && rating <= 5;
