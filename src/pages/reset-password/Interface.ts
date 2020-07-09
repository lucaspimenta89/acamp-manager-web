import { ReactElement } from 'react'

export interface IResetPasswordFormPayload {
  reset_password_token: string,
  password: string
  password_confirmation: string
}

export interface IResetPasswordViewProps {
  submitResetPasswordForm: (payload: Partial<IResetPasswordFormPayload>) => Promise<void>
  validateResetPasswordForm: (payload: IResetPasswordFormPayload) => Partial<IResetPasswordFormPayload>  
}

export interface IResetPasswordProviderProps {
  token: string
  children: (props: IResetPasswordViewProps) => ReactElement
}