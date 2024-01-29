import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  // Your MUI theme configuration goes here
  palette: {
    primary: {
      50: '#F9F5FF',
      100: '#F4EBFF',
      200: '#E9D7FE',
      300: '#D6BBFB',
      400: '#B692F6',
      500: '#9E77ED',
      600: '#7F56D9',
      700: '#6941C6',
    },
    secondary: {
      main: '#E9D7FE',
    },
    text: {
      primary: '#101828',
      secondary: '#475467',
      disabled: '#6E7191',
    },
    background: {
      default: '#ffffff',
      paper: '#F9FAFB',
    },
    grey: {
      50: '#F9FAFB',
      100: '#F2F4F7',
      200: '#EAECF0',
      300: '#D0D5DD',
      400: '#98A2B3',
      500: '#667085',
      600: '#475467',
      700: '#344054',
    },
    error: {
      main: '#D92D20',
    },
    warning: {
      main: '#FDB022',
    },
    info: {
      main: '#2196f3',
    },
    success: {
      main: '#12B76A',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontSize: '72px',
      lineHeight: '90px',
    },
    h2: {
      fontSize: '60px',
      lineHeight: '72px',
    },
    h3: {
      fontSize: '48px',
      lineHeight: '60px',
    },
    h4: {
      fontSize: '36px',
      lineHeight: '44px',
    },
    h5: {
      fontSize: '30px',
      lineHeight: '32px',
    },
    h6: {
      fontSize: '24px',
      lineHeight: '32px',
    },
    body1: {
      fontSize: '20px',
      lineHeight: '28px',
    },
    body2: {
      fontSize: '16px',
      lineHeight: '24px',
    },
    subtitle1: {
      fontSize: '14px',
      lineHeight: '20px',
    },
    subtitle2: {
      fontSize: '12px',
      lineHeight: '18px',
    },
  },

  breakpoints: {
    values: {
      xs: 0,   // Extra small devices (portrait phones)
      sm: 600, // Small devices (landscape phones)
      md: 960, // Medium devices (tablets)
      lg: 1280, // Large devices (laptops/desktops)
      xl: 1920, // Extra large devices (large desktops)
    },
  },
});

export default theme as any;