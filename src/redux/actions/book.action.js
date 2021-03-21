import commonActions from '../constants/action-types/common';
import BookActions from '../constants/action-types/book.actionTypes';

export const makeFavrouite = data => ({
  subtypes: BookActions.BookList,
  data,
});
