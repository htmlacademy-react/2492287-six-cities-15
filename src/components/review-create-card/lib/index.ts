import { CommentSize, RatingLimit } from '../const';

export const validateSubmit = (value: string, rating: number) =>
  value.length >= CommentSize.Min
  && value.length <= CommentSize.Max
  && rating >= RatingLimit.Min
  && rating <= RatingLimit.Max;
