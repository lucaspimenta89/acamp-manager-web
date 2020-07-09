import React from 'react'
import { IResetPasswordViewProps } from './Interface'
import Provider from './Provider'
import useStyles from './ResetPassword.styles'
import {
  Paper,
  TextField,
  Box,
  Button,
  Typography
} from '@material-ui/core'

import { Formik } from 'formik'

const SignUpPage: React.FC<IResetPasswordViewProps> = ({ submitResetPasswordForm, validateResetPasswordForm }) => {
  const classes = useStyles({})

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant='h6' align='center' className={classes.formTitle}>
          RECUPERAR SENHA
        </Typography>
        <Formik 
          initialValues={{ reset_password_token: '', password: '', password_confirmation: '' }}
          validate={validateResetPasswordForm}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(async () => {
              setSubmitting(true)
              await submitResetPasswordForm(values)
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

export default ({ token }: { token: string}) => (
  <Provider token={token}>
    {
      (props: IResetPasswordViewProps) => (
        <SignUpPage {...props} />
      )
    }
  </Provider>
)