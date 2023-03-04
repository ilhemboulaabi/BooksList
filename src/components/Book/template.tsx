import React from 'react';
import {
  CardContent,
  Typography,
  LinearProgress,
  Grid,
  CardMedia
} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IBook, IBookDetails } from '../../types';
import { SCBox, SCButton, SCCard, SCFavoriteButton, SCTypography } from './styles';
import { Link } from 'react-router-dom';

const Book = ({ book, loading, isBookDetails }: { book: IBook | IBookDetails, loading: boolean, isBookDetails?: string }) => {

  return (
    loading || !book
      ? <LinearProgress />
      : (
        <Grid item xs={12}>
          <SCCard raised isbookdetails={isBookDetails}>
            <CardMedia
              component="img"
              sx={{ width: isBookDetails ? 225 : 125, maxHeight: isBookDetails ? 300 : 200 }}
              image={isBookDetails ? `https://covers.openlibrary.org/b/id/${(book as IBookDetails).covers && (book as IBookDetails).covers[0]}-L.jpg` : `https://covers.openlibrary.org/b/id/${(book as IBook).cover_i}-L.jpg`}
              alt="Live from space album cover"
            />
            <SCBox>
              <CardContent>
                <SCTypography variant="h5">
                  {book.title}
                </SCTypography>
                {book.subtitle &&
                  <SCTypography variant="h6">
                    {book.subtitle}
                  </SCTypography>
                }
                <Typography variant="subtitle1" color="textSecondary">
                  <b>By:</b> {(book as IBook).author_name}
                </Typography>
                {isBookDetails &&
                  <>
                    <Typography variant="subtitle1" color="textSecondary">
                      <b>Fist Publish Date:</b>{(book as IBookDetails).first_publish_date}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                     <b>Description:</b>{(book as IBookDetails).description && (book as IBookDetails).description.value}
                    </Typography>
                  </>
                }
              </CardContent>
              {!isBookDetails &&
                <SCButton size="small" color="primary">
                  <Link to={`${book.key}`}> More...</Link>
                </SCButton>
              }
            </SCBox>
            <SCFavoriteButton variant="contained" startIcon={<FavoriteIcon />}>
              Favorite
            </SCFavoriteButton>
          </SCCard>
        </Grid>
      )
  );
};

export default Book;
