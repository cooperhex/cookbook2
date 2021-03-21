import bookActions from '../constants/action-types/book.actionTypes';
import {setAsyncStorage} from '../../utils/asyncStorage';
import {STORAGES} from '../../constants/index';

export const initialState = {
  bookList: [],
  dishFavouritesList: [],
};

const BookData = (state = initialState, action) => {
  const {payload, data, errors} = action;

  switch (action.type) {
    default:
      return state;
  }
};

export default BookData;
