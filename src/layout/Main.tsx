import React from 'react'
import useMainLayoutStyles from './main.styles'
import AppicationBar from '../components/ApplicationBar'
import { Container } from '@material-ui/core'
import PageFooter from '../components/PageFooter'

const MainLayout: React.FC = ({ children }) => {
  const classes = useMainLayoutStyles({})

  return (
    <React.Fragment>
      <AppicationBar />
      <Container className={classes.container}>
        <main className={classes.mainContent}>
            {children}
        </main>
      </Container>
      <PageFooter />
    </React.Fragment>    
  )
}

export default MainLayout