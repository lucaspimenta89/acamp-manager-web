import React from 'react'
import { ISignUpViewProps } from './Interface'
import Provider from './Provider'
import useStyles from './SignUp.styles'

import {
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Box,
  Button,
  Typography,
  OutlinedInput
} from '@material-ui/core'

import { Formik } from 'formik'
import PhoneInput from '../../components/PhoneInput'
import CpfInput from '../../components/CpfInput'
import Vault from '../../lib/Vault'
import { navigate } from '@reach/router'

const SignUpPage: React.FC<ISignUpViewProps> = ({ submitForm, validateSignUpForm }) => {
  const classes = useStyles({})

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant='h6' align='center' className={classes.formTitle}>
          CADASTRO
        </Typography>
        <Formik 
          initialValues={{ email: '', name: '', phone: '', cpf: '', church: '', password: '', password_confirmation: '' }}
          validate={validateSignUpForm}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(async () => {
              setSubmitting(true)
              await submitForm(values)
              setSubmitting(false)
            }, 400)
          }}>
          {
            ({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
            }) => (
              <form onSubmit={handleSubmit}>
                <TextField 
                  name='email'
                  variant='outlined'
                  type='email'
                  label='Email'
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!touched.email && !!errors.email}
                  helperText={!!touched.email && !!errors.email ? errors.email : 'Seu endereço de email'}
                  className={classes.formInput}
                  fullWidth />

                <TextField 
                  name='name'
                  variant='outlined'
                  type='text'
                  label='Nome completo'
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!touched.name && !!errors.name}
                  helperText={!!touched.name && !!errors.name ? errors.name : 'Seu nome completo'}
                  className={classes.formInput}
                  fullWidth />

                <FormControl variant='outlined' error={!!touched.phone && !!errors.phone} className={classes.formInput} fullWidth>
                  <InputLabel id="phone-input-label">Celular</InputLabel>
                  <OutlinedInput 
                    name='phone'                    
                    type='text'
                    labelWidth={50}
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    inputComponent={PhoneInput}
                    fullWidth />
                  <FormHelperText>
                    {!!touched.phone && !!errors.phone ? errors.phone : 'Número do seu telefone celular'}
                  </FormHelperText>
                </FormControl>

                <FormControl variant='outlined' error={!!touched.cpf && !!errors.cpf} className={classes.formInput} fullWidth>
                  <InputLabel id="phone-input-label">CPF</InputLabel>
                  <OutlinedInput 
                    name='cpf'                    
                    type='text'
                    labelWidth={30}
                    value={values.cpf}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    inputComponent={CpfInput}
                    fullWidth />
                  <FormHelperText>
                    {!!touched.cpf && !!errors.cpf ? errors.cpf : 'Número do seu CPF'}
                  </FormHelperText>
                </FormControl>

                <FormControl variant="outlined" error={!!touched.church && !!errors.church} className={classes.formInput} fullWidth>
                  <InputLabel id="church-select-label">Igreja</InputLabel>
                  <Select 
                    labelId='church-select-label'
                    id="church-select"
                    name="church"
                    value={values.church}
                    onChange={handleChange}
                    error={!!touched.church && !!errors.church}
                    label='Ingreja'
                    fullWidth>
                    <MenuItem value="">
                      <em>Selecionar</em>
                    </MenuItem>
                    <MenuItem value="jacy">
                      Jacy
                    </MenuItem>
                    <MenuItem value="oliveira">
                      Oliveira
                    </MenuItem>
                    <MenuItem value="piratininga">
                      Piratininga
                    </MenuItem>
                    <MenuItem value="uniao">
                      União
                    </MenuItem>
                    <MenuItem value="another-adventist-church">
                      Outra igreja adventista
                    </MenuItem>
                    <MenuItem value="no-adventist">
                      Não sou adventista
                    </MenuItem>
                  </Select>
                  <FormHelperText>
                    {!!touched.church && !!errors.church ? errors.church : 'Igreja que você frequenta'}
                  </FormHelperText>
                </FormControl>

                <TextField 
                  name='password'
                  variant='outlined'
                  type='password'
                  label='Senha'
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!touched.password && !!errors.password}
                  helperText={!!touched.password && !!errors.password ? errors.password : 'Escolha uma senha de acesso'}
                  className={classes.formInput}
                  fullWidth
                />

                <TextField 
                  name='password_confirmation'
                  variant='outlined'
                  type='password'
                  label='Confirmar senha'
                  value={values.password_confirmation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!touched.password_confirmation && !!errors.password_confirmation}
                  helperText={!!touched.password_confirmation && !!errors.password_confirmation ? errors.password_confirmation : 'Digite a senha novamente'}
                  className={classes.formInput}
                  fullWidth
                />

                <Box display='flex' flexDirection='row' alignItems='center' justifyContent='end'>
                  <Button type='submit' color='secondary' disabled={isSubmitting} variant='contained'>
                    Enviar
                  </Button>
                </Box>
              </form>
            )
          }
        </Formik>
      </Paper>
    </div>
  )
}

export default () => (
  <Provider>
    {
      (props: ISignUpViewProps) => (
        <SignUpPage {...props} />
      )
    }
  </Provider>
)