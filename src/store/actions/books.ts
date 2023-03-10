import { Dispatch } from 'redux';
import { fetchBooks } from '../../api/books';
import { IBook } from '../../types';
import BOOKS_ACTIONS from '../actiontypes/books';

const initBooks = () => ({
  type: BOOKS_ACTIONS.INIT_BOOKS
});

const initBooksSuccess = (books: IBook[], numFound: number) => ({
  type: BOOKS_ACTIONS.INIT_BOOKS_SUCCESS,
  books,
  numFound
});

const initBooksFailure = (error: string) => ({
  type: BOOKS_ACTIONS.INIT_BOOKS_FAILED,
  error
});

export const loadBooks = (bookTitle: string, currentPage: number) => (dispatch: Dispatch) => {
  dispatch(initBooks());

  return fetchBooks(bookTitle, currentPage).then(
    (response) => dispatch(initBooksSuccess(response.docs, response.numFound)),
    (error) => dispatch(initBooksFailure(error))
  );
};
