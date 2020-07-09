import { ReactElement } from 'react'
import { SignInState } from './store/State'

export interface ISignInPayload {
  email: string,
  password: string
}

export interface IResetPasswordPayload {
  email: string
}

export interface ISignInViewProps {
  state: SignInState
  toggleResetPasswodDialog: () => void
  submitSignInForm: (payload: ISignInPayload) => Promise<void>
  submitResetPasswordForm: (payload: IResetPasswordPayload) => Promise<void>
  validateSignInForm: (payload: ISignInPayload) => Partial<ISignInPayload>
  validateResetPasswordForm: (payload: ISignInPayload) => Partial<ISignInPayload>
}

export interface ISignInProviderProps {
  children: (props: ISignInViewProps) => ReactElement
}