import React from 'react'
import useMainLayoutStyles from './main.styles'
import AppicationBar from '../components/ApplicationBar'
import { Container } from '@material-ui/core'
import PageFooter from '../components/PageFooter'

import useServiceState from '../helpers/use-service-state'
import SessionManagerService from '../services/SessionManager'
import useNotification from '../helpers/use-notification'
import { navigate } from '@reach/router'

const MainLayout: React.FC = ({ children }) => {
  const classes = useMainLayoutStyles({})
  const sessionManagerState = useServiceState(SessionManagerService, false)
  const { emitError } = useNotification()

  const signOut = async () => {
    const error = await SessionManagerService.signOut()

    if (error) {
      emitError(error)
    } else {
      navigate('/')
    }
  }

  return (
    <React.Fragment>
      <AppicationBar user={sessionManagerState.user} onSignOut={signOut} />
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