import {
  SessionManagerState,
  sessionManagerState
} from './State'

import {
  RESET,
  SET_USER,
  TOGGLE_IS_LOADING,
  SessionManagerActions
} from './Actions'

export default function reducer(state: SessionManagerState, action: SessionManagerActions): SessionManagerState {
  switch(action.type) {
    case RESET:
      return sessionManagerState

    case SET_USER:
      return {
        ...state,
        user: action.payload
      }
    
    case TOGGLE_IS_LOADING:
      return {
        ...state,
        isLoadingUser: !state.isLoadingUser
      }

    default:
      return state
  }
}