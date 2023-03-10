import React from 'react';
import {
  LinearProgress,
  Alert,
  Grid
} from '@mui/material';
import Book from '../Book/template';
import { IBook } from '../../types';

export function Books({ books, loading, bookTitle }: { books: IBook[], loading: boolean, bookTitle: string | undefined }) {
  return (
    bookTitle === '' || books.length === 0
      ? (
        <>
          {loading && <LinearProgress />}
          <Alert severity="info">No Data available! Please type book title, search results will be displayed here !</Alert>
        </>
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
  );
}
