import React from 'react'
import { ISignInViewProps } from './Interface'
import Provider from './Provider'
import useStyles from './SignIn.styles'

import {
  Paper,
  TextField,
  Box,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
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
    <React.Fragment>
      <Dialog 
        open={state.isResetPasswordDialogOpen}
        onClose={toggleResetPasswodDialog}
        aria-labelledby="reset-password-dialog-title">
        <Formik
          initialValues={{ email: '' }}
          validate={validateResetPasswordForm}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(async () => {
              setSubmitting(true)
              const closeForm  = await submitResetPasswordForm(values)              
              setSubmitting(false)

              if (closeForm) {
                resetForm()
                toggleResetPasswodDialog()
              }
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
              isSubmitting,
              resetForm
            }) => (
              <React.Fragment>                
                <DialogTitle id="reset-password-dialog-title">
                  Recuperar senha
                </DialogTitle>
                <form onSubmit={handleSubmit}>
                  <DialogContent>
                    <DialogContentText>
                      Por favor, informe o seu email de cadastro. Caso encontremos seu email em nossa base de dados, lhe enviaremos um email com instruções para a recuperação de sua senha.
                    </DialogContentText>            
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
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => { resetForm(); toggleResetPasswodDialog(); }} color="primary">
                      Cancelar
                    </Button>
                    <Button type='submit' color='primary' disabled={isSubmitting}>
                      Enviar
                    </Button>
                  </DialogActions>
                </form>
              </React.Fragment>
            )
          }
        </Formik>
      </Dialog>
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

                  <Box display='flex' flexDirection='row' alignItems='center' justifyContent='space-between'>
                    <Button type='button' onClick={toggleResetPasswodDialog} color='secondary' disabled={isSubmitting}>
                      Equeceu a senha?
                    </Button>
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
    </React.Fragment>
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