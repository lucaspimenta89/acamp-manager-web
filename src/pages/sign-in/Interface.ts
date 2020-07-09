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
  submitResetPasswordForm: (payload: IResetPasswordPayload) => Promise<boolean>
  validateSignInForm: (payload: ISignInPayload) => Partial<ISignInPayload>
  validateResetPasswordForm: (payload: IResetPasswordPayload) => Partial<IResetPasswordPayload>
}

export interface ISignInProviderProps {
  children: (props: ISignInViewProps) => ReactElement
}