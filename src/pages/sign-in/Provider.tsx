import React, { useEffect } from 'react'
import { ISignInProviderProps, ISignInPayload, IResetPasswordPayload } from './Interface'
import useServiceState from '../../helpers/use-service-state'
import SignInService from './Service'
import SessionManagerService from '../../services/SessionManager'
import useNotification from '../../helpers/use-notification'
import { IUserContract } from '../../contracts/IUserContract'
import { navigate } from '@reach/router'
import Vault from '../../lib/Vault'

const SignInProvider: React.FC<ISignInProviderProps> = ({ children }) => {
  const serviceState = useServiceState(SignInService)  
  const { emitSuccess, emitError } = useNotification()

  useEffect(() => {
    if (!!Vault.getToken()) {
      navigate('/dashboard')
    }
  }, [])

  async function submitSignInForm(payload: ISignInPayload) {
    const [user, error] = await SignInService.submitSignInForm(payload)
    
    if (error) {
      emitError('Email e/ou senha inválidos')
    } else {
      emitSuccess(`Bem vindo! ${user?.name}`)
      SessionManagerService.setUser(user as IUserContract)
      navigate('/dashboard')
    }
  }

  async function submitResetPasswordForm(payload: IResetPasswordPayload): Promise<boolean> {
    const [, error] = await SignInService.submitResetPasswordForm(payload)

    if (error) {
      emitError(error)
      return false
    } 

    emitSuccess('Solicitação recebida com sucesso! Verifique seu email.')
    return true
  }

  return (
    <React.Fragment>
      {
        children({
          state: serviceState,
          submitResetPasswordForm,
          submitSignInForm,
          toggleResetPasswodDialog: () => SignInService.toggleResetPasswordDialog(),
          validateResetPasswordForm: (payload: IResetPasswordPayload) => SignInService.validateResetPasswordForm(payload),
          validateSignInForm: (payload: ISignInPayload) => SignInService.validateSignInForm(payload)
        })
      }
    </React.Fragment>
  )
}

export default SignInProvider