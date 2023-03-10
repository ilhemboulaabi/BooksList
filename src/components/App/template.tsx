import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import {
  LinearProgress, ThemeProvider as MuiThemeProvider, responsiveFontSizes, ThemeProvider, useTheme
} from '@mui/material';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import { SCBox } from './styles';

export const muiTheme = responsiveFontSizes(createTheme(theme));

// Util for sharing Material UI theme with styled-components
// Get material ui theme from the context and pass it to styled-components provider
export function ProvideSCWithMUITheme({ children }: { children: any }) {
  const muiTheme: Record<string, any> = useTheme();
  return <SCThemeProvider theme={{ ...muiTheme }}>{children}</SCThemeProvider>;
}

const Main = lazy(() => import('../../pages/Main'));
const BookDetails = lazy(() => import('../../pages/BookDetails'));

export function App() {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={muiTheme}>
        <ProvideSCWithMUITheme>
          <Router>
            <Suspense fallback={<LinearProgress />}>
              <SCBox>
                <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/works/:workId" element={<BookDetails />} />
                </Routes>
              </SCBox>
            </Suspense>
          </Router>
        </ProvideSCWithMUITheme>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}
