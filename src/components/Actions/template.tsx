import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, LinearProgress } from '@mui/material';
import { IBook } from '../../types';
import { SCTextField, SCBox } from './styles';

function Actions({ handleBookChange, books }: { handleBookChange: any, books: IBook[] }) {
  return (
    <SCBox>
      <Autocomplete
        onChange={handleBookChange}
        onInputChange={handleBookChange}
        options={books && books.map((book) => book.title)}
        noOptionsText="no data matching"
        // value={bookTitle}
        getOptionLabel={(option) => (option || '')}
        renderOption={(props, option) => (
          <li {...props} key={`${option}-${Math.random()}`}>
            {option}
          </li>
        )}
        isOptionEqualToValue={(option: any, value: any) => option.value === value.value}
        popupIcon={<SearchIcon />}
        renderInput={(params) => (
          <SCTextField {...params} variant="outlined" label="Book!" key="bookTitle" />
        )}
      />
    </SCBox>
  );
}

export default Actions;
