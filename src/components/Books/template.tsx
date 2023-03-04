import React from 'react';
import {
  LinearProgress,
  Box,
  Alert,
  Grid
} from "@mui/material";
import Book from '../Book/template';
import { IBook } from '../../types';

export const Books = ({ books, loading, bookTitle }: { books: IBook[], loading: boolean, bookTitle: string | undefined }) => {

  return (
    bookTitle === ''
      ? (
        <Alert severity="info">Please type book title, search results will be displayed here !</Alert>
      )
      : (
        loading || books.length === 0
          ? (
            <Box>
              <LinearProgress />
              <Alert severity="info">No Data available!</Alert>
            </Box>
          )
          : (
            <Grid container spacing={2}>
              {
                books && books.map((book) => (
                  <Book
                    key={book.key}
                    book={book}
                    loading={loading}
                  />
                ))
              }
            </Grid>
          )
      )
  )
};

