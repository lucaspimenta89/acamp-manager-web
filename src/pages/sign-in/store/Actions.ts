export const TOGGLE_RESET_PASSWORD_DIALOG = 'TOGGLE_RESET_PASSWORD_DIALOG'
export const RESET = 'RESET'

export function togglerResetPasswordDialog() {
  return {
    type: TOGGLE_RESET_PASSWORD_DIALOG,
    payload: {}
  } as const
}

export function reset() {
  return {
    type: RESET,
    payload: {}
  } as const
}

export type SignInActions = ReturnType<typeof togglerResetPasswordDialog | typeof reset>
