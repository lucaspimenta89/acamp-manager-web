import { HomePageState, homeInitialState } from './State'

import {
  SET_CURRENT_SUBS_INFO_TAB,
  RESET,
  HomePageActions
} from './Actions'

export default function homePageReducer(state: HomePageState, action: HomePageActions): HomePageState {
  switch(action.type) {
    case SET_CURRENT_SUBS_INFO_TAB:
      return {
        ...state,
        currentSubsInfoTab: action.payload
      }
    case RESET:
      return homeInitialState
    default:
      return state
  }
}