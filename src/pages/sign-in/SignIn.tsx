import React from 'react'
import { ISignInViewProps } from './Interface'
import Provider from './Provider'
import useStyles from './SignIn.styles'

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

const SignInPage: React.FC<ISignInViewProps> = ({ 
  state, 
  submitResetPasswordForm, 
  toggleResetPasswodDialog, 
  submitSignInForm, 
  validateResetPasswordForm, 
  validateSignInForm 
}) => {
  const classes = useStyles({})

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant='h6' align='center' className={classes.formTitle}>
          LOGIN
        </Typography>
        <Formik 
          initialValues={{ email: '', password: '' }}
          validate={validateSignInForm}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(async () => {
              setSubmitting(true)
              await submitSignInForm(values)
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
      (props: ISignInViewProps) => (
        <SignInPage {...props} />
      )
    }
  </Provider>
)