import { 
  HomePageSubscriptionEnum
} from './State'

export const SET_CURRENT_SUBS_INFO_TAB = 'SET_CURRENT_SUBS_INFO_TAB'
export const RESET = 'RESET'

export function setCurrentSubsInfoTab(payload: HomePageSubscriptionEnum) {
  return {
    type: SET_CURRENT_SUBS_INFO_TAB,
    payload
  } as const
}

export function reset() {
  return {
    type: RESET,
    payload: {}
  } as const
}

export type HomePageActions = ReturnType<typeof setCurrentSubsInfoTab | typeof reset>