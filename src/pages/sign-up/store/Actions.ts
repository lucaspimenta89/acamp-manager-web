export const SET_ERROR = 'SET_ERROR'
export const SET_SUCCESS = 'SET_SUCCESS'
export const RESET = 'RESET'

export function setError(error: string) {
  return {
    type: SET_ERROR,
    payload: error
  } as const
}

export function setSuccess(success: string) {
  return {
    type: SET_SUCCESS,
    payload: success
  } as const
}

export function reset() {
  return {
    type: RESET,
    payload: {}
  } as const
}

export type SignUpPageActions = ReturnType<typeof setError | typeof setSuccess | typeof reset>