import { SignInState, signInState } from './State'
import {
  RESET,
  TOGGLE_RESET_PASSWORD_DIALOG,
  SignInActions
} from './Actions'

export default function reducer(state: SignInState, action: SignInActions): SignInState {
  switch(action.type) {
    case RESET:
      return signInState
    case TOGGLE_RESET_PASSWORD_DIALOG:
      return {
        ...state,
        isResetPasswordDialogOpen: !state.isResetPasswordDialogOpen
      }
    default:
      return state
  }
}