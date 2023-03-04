import { combineReducers } from 'redux';
import BooksReducer from './books';
import BookDetailsReducer from './bookDetails';

const rootReducer = combineReducers({
  booksState: BooksReducer,
  bookDetailsState: BookDetailsReducer
});

export default rootReducer;
