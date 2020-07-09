import ServiceBase from '../../lib/ServiceBase'

import {
  reset,
  setError,
  setSuccess,
  SignUpPageActions
} from './store/Actions'

import { SignUpState, signUpState } from './store/State'
import reducer from './store/Reducer'
import { ISignUpFormPayload } from './Interface'
import { IUserContract } from '../../contracts/IUserContract'
import Http from '../../lib/Http'
import Vault from '../../lib/Vault'

export class SignUpPageService extends ServiceBase<SignUpState, SignUpPageActions> {

  constructor() {
    super(signUpState)
  }

  reduce(state: SignUpState, action: SignUpPageActions): SignUpState {
    return reducer(state, action)
  }

  setError(error: string) {
    this.dispatch(setError(error))
  }

  setSuccess(success: string) {
    this.dispatch(setSuccess(success))
  }

  async submitSignUpForm(payload: ISignUpFormPayload): Promise<[IUserContract | null, string | null]> {
    const [result, statusCode, error] = await Http
      .post<ISignUpFormPayload, IUserContract>(
        '/account/sign-up',
        payload
      )

    if (statusCode !== 201) {
      this.setError(error as string)
      return [null, error]
    }

    Vault.setToken(result?.data.token as string)

    this.setSuccess('Usuário criado com sucesso')

    return [result?.data as IUserContract, null]
  }

  validateSignUpForm(values: ISignUpFormPayload): Partial<ISignUpFormPayload> {
    const errors: Partial<ISignUpFormPayload> = {}

    const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    const HAS_INVALID_PHONE_CHARACTER = /[^0-9/(/)/-]/g
    const HAS_INVALID_CPF_CHARACTER = /[^0-9/./-]/g

    if (!values.email || !EMAIL_REGEX.test(values.email)) {
      errors.email = 'Email inválido'
    }

    if (values.name.length === 0) {
      errors.name = 'Nome inválido'
    }

    if (values.phone.length < 14 || HAS_INVALID_PHONE_CHARACTER.test(values.phone)) {
      errors.phone = 'Celular inválido'
    }

    if (values.cpf.length < 14 || HAS_INVALID_CPF_CHARACTER.test(values.cpf)) {
      errors.cpf = 'CPF inválido'
    }

    if (!values.church || values.church.length === 0) {
      errors.church = 'Igreja não selecionada'
    }

    if (!values.password || values.password.length === 0) {
      errors.password = 'Senha inválida'
    }

    if (values.password !== values.password_confirmation) {
      errors.password_confirmation = 'Senha e confirmação de senha não conferem'
    }

    return errors
  }

  reset() {
    this.dispatch(reset())
  }
}

let instance: SignUpPageService | null = null

export default (() => {
  if (!instance) {
    instance = new SignUpPageService()
  }
  return instance
})()