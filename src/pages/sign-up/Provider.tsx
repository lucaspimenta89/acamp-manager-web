import React, { useEffect } from 'react'
import { ISignUpProviderProps, ISignUpFormPayload } from './Interface'
import useServiceState from '../../helpers/use-service-state'
import SignUpService from './Service'
import useNotification from '../../helpers/use-notification'
import SessionManagerService from '../../services/SessionManager'
import { IUserContract } from '../../contracts/IUserContract'
import { navigate } from '@reach/router'
import Vault from '../../lib/Vault'

const SignUpPageProvider: React.FC<ISignUpProviderProps> = ({ children }) => {
  const serviceState = useServiceState(SignUpService)
  const { emitSuccess, emitError } = useNotification()

  useEffect(() => {
    if (!!Vault.getToken()) {
      navigate('/dashboard')
    }
  }, [])
  
  async function submitForm(payload: ISignUpFormPayload) {
    const [user, error] = await SignUpService.submitSignUpForm(payload)

    if (error) {
      emitError(error)
    } else {
      emitSuccess('Cadastro efetuado com sucesso.')
      SessionManagerService.setUser(user as IUserContract)
      navigate('/dashboard')
    }
  }

  return (
    <React.Fragment>
      {
        children({
          state: serviceState,
          setError: (payload: string) => SignUpService.setError(payload),
          setSuccess: (payload: string) => SignUpService.setSuccess(payload),
          validateSignUpForm: SignUpService.validateSignUpForm,
          submitForm
        })
      }
    </React.Fragment>
  )  
}

export default SignUpPageProvider