import { Dispatch } from 'redux';
import { fetchBookDetails } from '../../api/books';
import { IBookDetails } from '../../types';
import BOOK_DETAILS_ACTIONS from '../actiontypes/bookDetails';

const initBookDetailsSuccess = (bookDetails: IBookDetails) => ({
  type: BOOK_DETAILS_ACTIONS.INIT_BOOK_DETAILS_SUCCESS,
  bookDetails
});

const initBookDetailsFailure = (error: string) => ({
  type: BOOK_DETAILS_ACTIONS.INIT_BOOK_DETAILS_FAILED,
  error
});

const initBookDetails = () => ({
  type: BOOK_DETAILS_ACTIONS.INIT_BOOK_DETAILS
});

export const loadBookDetails = (workId: string) => (dispatch: Dispatch) => {
  dispatch(initBookDetails());

  return fetchBookDetails(workId).then(
    (response) => dispatch(initBookDetailsSuccess(response)),
    (error) => dispatch(initBookDetailsFailure(error))
  );
};
