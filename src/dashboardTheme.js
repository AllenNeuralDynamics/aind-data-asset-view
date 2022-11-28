import { createTheme } from '@mui/material/styles';

const dashboardTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#003057',
      light: '3a5984',
      dark: '#00062e',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#2A7DE1',
      light: '#6eacff',
      dark: '#0052ae',
      contrastText: '#000000',
    },
    neutral: {
      main: '#7C7D7F',
      dark: '#505153',
      light: '#abacae',
      contrastText: '#000000',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h3: {
      fontSize: '1.6rem',
      color: '#FFFFFF',
      letterSpacing: 6,
      letterHeight: 1.5,
      textTransform: 'uppercase',
      fontWeight: 'medium',
    },
  },
});

export default dashboardTheme;
