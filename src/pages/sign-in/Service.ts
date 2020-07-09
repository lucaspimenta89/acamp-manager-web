import ServiceBase from '../../lib/ServiceBase'

import {
  reset,
  togglerResetPasswordDialog,
  SignInActions
} from './store/Actions'

import { SignInState, signInState } from './store/State'
import reducer from './store/Reducer'
import { ISignInPayload, IResetPasswordPayload } from './Interface'
import { IUserContract } from '../../contracts/IUserContract'
import Http from '../../lib/Http'
import Vault from '../../lib/Vault'

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

export class SignInPageService extends ServiceBase<SignInState, SignInActions> {

  constructor() {
    super(signInState)
  }

  reduce(state: SignInState, action: SignInActions): SignInState {
    return reducer(state, action)
  }

  async submitSignInForm(payload: ISignInPayload): Promise<[IUserContract | null, string | null]> {
    const [result, statusCode, error] = await Http
      .post<ISignInPayload, IUserContract>(
        '/session/sign-in',
        payload
      )

    if (statusCode !== 200) {
      return [null, error]
    }

    Vault.setToken(result?.data.token as string)

    return [result?.data as IUserContract, null]
  }

  async submitResetPasswordForm(payload: IResetPasswordPayload): Promise<[string | null, string | null]> {
    const [result, statusCode, error] = await Http
      .post<IResetPasswordPayload, string>(
        '/account/request-reset-password',
        payload
      )

    if (statusCode !== 201) {
      return [null, error]
    }

    return [result?.data as string, null]
  }

  toggleResetPasswordDialog() {
    this.dispatch(togglerResetPasswordDialog())
  }

  validateSignInForm(values: ISignInPayload): Partial<ISignInPayload> {
    const errors: Partial<ISignInPayload> = {}

    if (!values.email || !EMAIL_REGEX.test(values.email)) {
      errors.email = 'Email inválido'
    }

    if (!values.password || values.password.length === 0) {
      errors.password = 'Senha inválida'
    }

    return errors
  }

  validateResetPasswordForm(values: IResetPasswordPayload): Partial<IResetPasswordPayload> {
    const errors: Partial<IResetPasswordPayload> = {}

    if (!values.email || !EMAIL_REGEX.test(values.email)) {
      errors.email = 'Email inválido'
    }

    return errors
  }

  reset() {
    this.dispatch(reset())
  }
}

let instance: SignInPageService | null = null

export default (() => {
  if (!instance) {
    instance = new SignInPageService()
  }
  return instance
})()