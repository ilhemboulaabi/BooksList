import { Box, styled, TextField } from '@mui/material';
import { palette, spacing } from '../../styles/accessors';
import { plateform } from '../../styles/theme';

export const SCTextField = styled(TextField)`
  && {
    background-color: ${palette('main')('white')};
    margin: ${spacing(1)} ${spacing(1)} ${spacing(1)} 0;
    width: 400px;
    border-radius: 5px;
    > input {
      padding: ${spacing(2)} ${spacing(1)};
    }
  }
`;

export const SCBox = styled(Box)`
  && {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    box-sizing: border-box;
    z-index: 100;
    padding: 0 ${spacing(1)};
    background-color: ${palette('primary')('main')};
    @media ${plateform.medium} {
      padding: 0 ${spacing(9)};
    }
  }
`;
