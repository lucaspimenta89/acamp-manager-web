import React, { useState } from 'react'
import { AppBar, Toolbar, Container, Typography, Button, IconButton, Menu, MenuItem, Link } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle';
import { IApplicationBarProps } from './Interfaces'
import useStyles from './styles'
import { navigate } from '@reach/router'

const AppicationBar: React.FC<IApplicationBarProps> = ({ user, onSignOut }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const classes = useStyles({})

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }
 
  return (
    <AppBar position="fixed" elevation={4} className={classes.root}>
      <Container>
        <Toolbar >
            <Typography variant="h6" className={classes.title}>
              <Link component='button' onClick={() => navigate('/')} className={classes.homeButton}>
                Acamp Jacy 2021
              </Link>            
            </Typography>
          {
            !!user ? (
              <React.Fragment>
                <IconButton
                  aria-label="conta do usuário atual"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  className={classes.icon}
                  onClick={handleMenu}
                >
                  <AccountCircle fontSize='large' />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}>
                  <MenuItem onClick={() => navigate('/dashboard')}>Dashboard</MenuItem>
                  <MenuItem onClick={() => { 
                    if(onSignOut) { 
                      onSignOut() 
                    }
                  }}>Sair</MenuItem>
                </Menu>
              </React.Fragment>
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