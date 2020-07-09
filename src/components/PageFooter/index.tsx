import React from 'react'
import { Container, Toolbar, Typography } from '@material-ui/core'
import useStyles from './style'

const PageFooter: React.FC = () => {
  const classes = useStyles({})
  const year = (new Date()).getFullYear()

  return(
    <div className={classes.root}>
      <Container>
        <Toolbar>
          <Typography variant='h6'>
           &copy; Copyright {year} 
          </Typography>
        </Toolbar>
      </Container>
    </div>
  )
}

export default PageFooter