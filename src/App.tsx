import React from 'react';
import MainTheme from './theme/MainTheme'
import { ThemeProvider, CssBaseline } from '@material-ui/core';

import { Router, Location } from '@reach/router'
import ApplicationRoutes from './config/ApplicationRoutes'

import NotificationProvider from './components/NotificationProvider'


function App() {
  return (
    <ThemeProvider theme={MainTheme}>
      <CssBaseline />
      <NotificationProvider>
        <Location>
          {
            ({ location }) => {
              return (
                <Router location={location}>
                  {
                    ApplicationRoutes.map(({ id, path, component: Component }) => (
                      <Component key={id} routeId={id} path={path} /> 
                    ))
                  }
                </Router>
              )
            }
          }
        </Location>
      </NotificationProvider>
    </ThemeProvider>
  );
}

export default App;
