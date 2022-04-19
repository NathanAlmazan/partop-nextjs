import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#005b96",
      light: "#b3cde0",
      dark: "#03396c"
    },
    secondary: {
      main: "#8F8F88",
      light: "#DBDBD0",
      dark: "#4F4F4B"
    },
    info: {
      main: "#FFFF",
      light: "#FFFF",
      dark: "#FFFF"
    }
  },
  typography: {
    fontFamily: ["Rubik", "sans-serif"].join(","),
    h1: {
      fontSize: 40,
      color: "#FFFF",
      fontWeight: 600
    },
    h2: {
      fontSize: 28,
      color: "#FFFF",
      fontWeight: 550
    },
    h4: {
      fontSize: 18
    },
    h5: {
      letterSpacing: 8,
      fontWeight: 550,
      color: "#4F4F4B"
    },
    h6: {
      fontWeight: 600,
      fontSize: 16
    },
    body1: {
      color: "#8F8F88",
      fontSize: 18
    },
    body2: {
      color: "#8F8F88",
      fontSize: 20
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0
        }
      }
    }
  }
});

export default theme;
