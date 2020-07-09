import { IResetPasswordFormPayload } from './Interface'
import Http from '../../lib/Http'

export class ResetPasswordService {
  async submitResetPasswordForm(payload: IResetPasswordFormPayload): Promise<[string | null, string | null]> {
    const [result, statusCode, error] = await Http
      .post<IResetPasswordFormPayload, string>(
        '/account/reset-password',
        payload
      )

    if (statusCode !== 201) {
      return [null, error]
    }

    return [result?.data as string, null]
  }

  validateResetPasswordForm(values: IResetPasswordFormPayload): Partial<IResetPasswordFormPayload> {
    const errors: Partial<IResetPasswordFormPayload> = {}
    
    if (!values.password || values.password.length === 0) {
      errors.password = 'Senha inválida'
    }

    if (values.password !== values.password_confirmation) {
      errors.password_confirmation = 'Senha e confirmação de senha não conferem'
    }

    return errors
  }
}

let instance: ResetPasswordService | null = null

export default (() => {
  if (!instance) {
    instance = new ResetPasswordService()
  }
  return instance
})()