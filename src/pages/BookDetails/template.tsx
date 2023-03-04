import React from 'react';
import {
  LinearProgress,
  Box,
  Alert
} from "@mui/material";
import { IBookDetails } from '../../types';
import Book from '../../components/Book/template';
import { useLocation } from 'react-router-dom';

const BookDetails = ({ bookDetails, isBookDetailsLoading, actions }: { bookDetails: IBookDetails, isBookDetailsLoading: boolean, actions: any }) => {
  const location = useLocation();
  React.useEffect(() => {
    actions.bookDetails.loadBookDetails(location.pathname);
  }, [actions.bookDetails, actions.bookDetails.loadBookDetails, location.pathname]);

  return (
    isBookDetailsLoading
      ? (
        <Box>
          <LinearProgress />
          <Alert severity="info">No Data available!</Alert>
        </Box>
      )
      : (
        <Book
          book={bookDetails}
          loading={isBookDetailsLoading}
          isBookDetails="true"
        />
      )
  );
}

export default BookDetails;
