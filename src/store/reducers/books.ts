import produce from 'immer';
import { Reducer } from 'redux';
import { IBookStateProps } from '../../types';
import BOOKS_ACTIONS from '../actiontypes/books';

const initialState: IBookStateProps = {
  books: [],
  numFound: 0,
  isBooksLoading: false
};

const BooksReducer: Reducer<IBookStateProps> = (state = initialState, action: any) => produce(state, (draft) => {
  switch (action.type) {
    case BOOKS_ACTIONS.INIT_BOOKS:
      draft.isBooksLoading = true;
      break;
    case BOOKS_ACTIONS.INIT_BOOKS_SUCCESS:
      draft.books = action.books;
      draft.isBooksLoading = false;
      draft.numFound = action.numFound;
      break;
    case BOOKS_ACTIONS.INIT_BOOKS_FAILED:
      draft.isBooksLoading = false;
      break;
    default:
      return state;
  }
});
export default BooksReducer;
