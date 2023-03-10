import { Theme } from '@mui/material';

export const theme: any = {
  palette: {
    primary: {
      main: '#54AEFF',
      light: '#B6E3FF',
      dark: '#0969DA'
    },
    secondary: {
      main: '#fd8c73',
      light: '#fff8c5'
    },
    main: {
      white: '#ffffff',
      black: '#000000',
      grey: '#8798ad'
    }
  }
};

export const responsivePageSize = {
  sm: '600px',
  md: '900px',
  lg: '1200px'
};

export const plateform = {
  small: `(min-width: ${responsivePageSize.sm})`,
  medium: `(min-width: ${responsivePageSize.md})`,
  large: `(min-width: ${responsivePageSize.lg})`
};

// const theme is being merged with MUI theme
// that's full type avilable in SC
export type CustomTheme = Theme & typeof theme;

export default theme as CustomTheme;
