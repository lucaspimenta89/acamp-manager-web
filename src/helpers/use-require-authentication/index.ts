import { useEffect } from 'react'
import useServiceState from '../use-service-state'
import useNotification from '../use-notification'

import SessionManagerService from '../../services/SessionManager'
import { IUserContract } from '../../contracts/IUserContract'

export default function useRequireAuthentication(): IUserContract {  
  const sessionManagerState = useServiceState(SessionManagerService, false)
  const { emitError } = useNotification()

  useEffect(() => {
    async function loadUser() {
      const error = await SessionManagerService.loadCurrentUser()

      if (error) {
        emitError('Sessão encerrada.')
      }
    }
    if (!SessionManagerService.state.user && !SessionManagerService.state.isLoadingUser) {
      loadUser()
    }
  }, [emitError])

  return sessionManagerState.user
}