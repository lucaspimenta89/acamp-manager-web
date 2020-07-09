import React, { useEffect } from 'react'
import { IResetPasswordFormPayload, IResetPasswordProviderProps } from './Interface'
import ResetPasswordService from './Service'
import useNotification from '../../helpers/use-notification'
import { navigate } from '@reach/router'
import Vault from '../../lib/Vault'

const ResetPasswordProvider: React.FC<IResetPasswordProviderProps> = ({ token, children }) => {  
  const { emitSuccess, emitError } = useNotification()

  useEffect(() => {
    if (!!Vault.getToken()) {
      navigate('/dashboard')
    }
  }, [])
  
  async function submitResetPasswordForm(payload: Partial<IResetPasswordFormPayload>) {
    const completePayload = {
      ...payload,
      reset_password_token: token
    }

    const [, error] = await ResetPasswordService.submitResetPasswordForm(completePayload as IResetPasswordFormPayload)

    if (error) {
      emitError(error)
    } else {
      emitSuccess('Senha alterada com sucesso.')      
      navigate('/sign-in')
    }
  }

  return (
    <React.Fragment>
      {
        children({
          submitResetPasswordForm,
          validateResetPasswordForm: ResetPasswordService.validateResetPasswordForm.bind(ResetPasswordService)
        })
      }
    </React.Fragment>
  )  
}

export default ResetPasswordProvider