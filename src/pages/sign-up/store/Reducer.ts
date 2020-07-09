import {
  signUpState,
  SignUpState
} from './State'

import {
  SET_ERROR,
  SET_SUCCESS,
  RESET,
  SignUpPageActions
} from './Actions'

export default function signUpPageReducer(state: SignUpState, action: SignUpPageActions): SignUpState {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case SET_SUCCESS:
      return {
        ...state,
        success: action.payload
      }
    case RESET:
      return signUpState
    default: 
      return state
  }
}