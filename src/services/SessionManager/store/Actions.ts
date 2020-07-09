import { IUserContract } from "../../../contracts/IUserContract"

export const SET_USER = 'SET_USER'
export const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'
export const RESET = 'RESET'

export function setUser(user: IUserContract) {
  return {
    type: SET_USER,
    payload: user
  } as const
}

export function toggleIsLoading() {
  return {
    type: TOGGLE_IS_LOADING,
    payload: {}
  } as const
}

export function reset() {
  return {
    type: RESET,
    payload: {}
  } as const
}


export type SessionManagerActions = ReturnType<typeof setUser | typeof toggleIsLoading | typeof reset>