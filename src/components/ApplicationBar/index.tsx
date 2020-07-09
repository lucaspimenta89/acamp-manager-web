import React from 'react'
import { AppBar, Toolbar, Container, Typography, Button } from '@material-ui/core'
import { IApplicationBarProps } from './Interfaces'
import useStyles from './styles'
import { navigate } from '@reach/router'

const AppicationBar: React.FC<IApplicationBarProps> = ({ user }) => {
  const classes = useStyles({})
  return (
    <AppBar position="fixed" elevation={4} className={classes.root}>
      <Container>
        <Toolbar >
          <Typography variant="h6" className={classes.title}>
            Acamp Jacy 2021
          </Typography>
          {
            !!user ? (
              <React.Fragment></React.Fragment>
            ) : (
              <Button variant='contained' color='secondary' onClick={() => navigate('/sign-in')}>
                Efetuar Login
              </Button>
            )
          }
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default AppicationBar