import { Pagination } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import Actions from '../../components/Actions/template';
import { Books } from '../../components/Books/template';
import { IBookStateProps } from '../../types';
import { SCContainer } from './styles';

const Main: React.FC<IBookStateProps & { actions: any }> = ({
  books,
  isBooksLoading,
  actions,
  numFound
}) => {
  const [bookTitle, setbookTitle] = useState<string | undefined>('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleBookChange = (_: ChangeEvent<{}>, newValue: string) => {
    setbookTitle(newValue);
  }

  const handelPageChange = (event: any, value: number) => {
    if (currentPage !== value) {
      setCurrentPage(value);
    }
  }

  React.useEffect(() => {
    bookTitle && actions.books.loadBooks(bookTitle, currentPage);
  }, [actions.books, actions.books.loadBooks, bookTitle, currentPage]);

  return (
    <SCContainer>
      <Actions
        handleBookChange={handleBookChange}
        books={books}
      />
      <Books
        books={books}
        loading={isBooksLoading}
        bookTitle={bookTitle}
      />
      {books.length !== 0 && numFound > 100 &&
        <Pagination
          count={Math.floor(numFound / 100) + 1}
          page={currentPage}
          onChange={(event, value) => handelPageChange(event, value)}
        />
      }
    </SCContainer>
  );
}

export default Main;
