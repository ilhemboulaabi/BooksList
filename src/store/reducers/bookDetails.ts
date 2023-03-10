import { Reducer } from 'redux';
import produce from 'immer';
import BOOK_DETAILS_ACTIONS from '../actiontypes/bookDetails';
import { IBookDetailsStateProps } from '../../types';

const initialState = {
  bookDetails: {},
  isBookDetailsLoading: false
};

const BookDetailsReducer: Reducer = (state = initialState, action) => produce(state, (draft: IBookDetailsStateProps) => {
  switch (action.type) {
    case BOOK_DETAILS_ACTIONS.INIT_BOOK_DETAILS:
      draft.isBookDetailsLoading = true;
      break;
    case BOOK_DETAILS_ACTIONS.INIT_BOOK_DETAILS_SUCCESS:
      draft.bookDetails = { ...action.bookDetails };
      draft.isBookDetailsLoading = false;
      break;

    case BOOK_DETAILS_ACTIONS.INIT_BOOK_DETAILS_FAILED:
      draft.isBookDetailsLoading = false;
      break;

    default:
      return state;
  }
});
export default BookDetailsReducer;
