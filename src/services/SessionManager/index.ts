import ServiceBase from '../../lib/ServiceBase'

import {
  reset,
  setUser,
  toggleIsLoading,
  SessionManagerActions
} from './store/Actions'

import reducer from './store/Reducer'

import { SessionManagerState, sessionManagerState } from './store/State'
import { IUserContract } from '../../contracts/IUserContract'
import Http from '../../lib/Http'

export class SessionManagerService extends ServiceBase<SessionManagerState, SessionManagerActions> {

  constructor() {
    super(sessionManagerState)
  }

  reduce(state: SessionManagerState, action: SessionManagerActions): SessionManagerState {
    return reducer(state, action)
  }

  setUser(user: IUserContract) {
    this.dispatch(setUser(user))
  }

  async loadCurrentUser(): Promise<string | null> {
    if (this.state.isLoadingUser) {
      return null
    }

    this.dispatch(toggleIsLoading())
    
    const [result, status, error] = await Http.get<IUserContract>('/session/whoami')
    
    this.dispatch(toggleIsLoading())

    if (status !== 200) {
      return error
    }

    this.dispatch(setUser(result?.data as IUserContract))

    return null
  }

  reset() {
    this.dispatch(reset())
  }
}

let instance: SessionManagerService | null = null

export default (() => {
  if (!instance) {
    instance = new SessionManagerService()
  }

  return instance
})()