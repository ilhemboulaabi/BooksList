import React from 'react';
import SearchIcon from "@mui/icons-material/Search";
import { Autocomplete } from '@mui/material';
import { IBook } from '../../types';
import { SCTextField, SCBox } from './styles';

const Actions = ({ handleBookChange, books }: { handleBookChange: any, books: IBook[] }) => {

  return (
    <SCBox>
      <Autocomplete
        onChange={handleBookChange}
        onInputChange={handleBookChange}
        options={books.map((book) => book.title)}
        // value={bookTitle}
        getOptionLabel={(option) => (option ? option : "")}
        renderOption={(props, option) => {
          return (
            <li {...props} key={`${option}-${Math.random()}`}>
              {option}
            </li>
          );
        }}
        isOptionEqualToValue={(option: any, value: any) => option.value === value.value}
        popupIcon={<SearchIcon />}
        renderInput={(params) => (
          <SCTextField {...params} variant="outlined" label="Book!" key="bookTitle" />
        )}
      />
    </SCBox>
  );
};

export default Actions;
