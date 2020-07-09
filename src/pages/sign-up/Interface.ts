import { SignUpState } from './store/State'
import { IUserContract } from '../../contracts/IUserContract';

export interface ISignUpFormPayload {
  email: string
  name: string
  phone: string
  cpf: string
  church: string
  password: string
  password_confirmation: string
}

export interface ISignUpViewProps {
  state: SignUpState,
  setError: (payload: string) => void,
  setSuccess: (payload: string) => void,
  validateSignUpForm: (values: ISignUpFormPayload) => Partial<ISignUpFormPayload>,
  submitForm: (payload: ISignUpFormPayload) => Promise<void>
}

export interface ISignUpProviderProps {
  children: (props: ISignUpViewProps) => React.ReactElement
}