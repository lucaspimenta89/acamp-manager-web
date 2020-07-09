import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          paddingTop: '64px',
          paddingBottom: '64px',
          minHeight: '100vh',
          minWidth: '100vw'
        }
      }
    }
  },
  palette: {
    primary: {
      light: '#484848',
      main: '#212121',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#6abf69',
      main: '#388e3c',
      dark: '#00600f',
      contrastText: '#000000',
    },
  },
});

export default theme