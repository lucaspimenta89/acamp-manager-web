import React from 'react'

import Provider from './Provider'

import {
  IOrdersManagementViewProps
} from './Interfaces'
import { Typography, Paper, List, ListItem, ListItemText, Grid, Divider, Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText, DialogActions } from '@material-ui/core'

import useStyles from './OrdersManagement.styles'
import 'numeral/locales/pt-br'
import numeral from 'numeral'
import moment from 'moment'
import { Formik } from 'formik'

numeral.locale('pt-br')

function getPaymentTypeName(paymentType: string) {
  switch(paymentType) {
    case 'refund':
      return 'Extorno'
    case 'room_signal':
      return 'Sinal de Compra de quarto'
    case 'parcel':
      return 'Parcela'
    default:
      return 'Não especificado'
  }
}


const OrdersManagement: React.FC<IOrdersManagementViewProps> = ({
  state,
  setCurrentOrder,
  validatePayment,
  registerPayment
}) => {
  const classes = useStyles({})
  return (
    <React.Fragment>

      <Dialog
        open={Boolean(state.currentOrder)}
        onClose={() => setCurrentOrder(null)}
        aria-labelledby="register-payment-dialog-title">
        <DialogTitle>
          Registrar Pagamento
        </DialogTitle>
        <Formik
          initialValues={{ amount: '', payment_type: 'none' }}
          validate={validatePayment}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(async () => {
              setSubmitting(true)
              const closeForm = await registerPayment(values)
              setSubmitting(false)

              if (closeForm) {
                resetForm()
                setCurrentOrder(null)
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
                  <form onSubmit={handleSubmit}>
                    <DialogContent>
                      <DialogContentText>
                        Informações do pagamento
                  </DialogContentText>
                      <TextField
                        name='amount'
                        variant='outlined'
                        type='text'
                        label='Valor'
                        value={values.amount}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={!!touched.amount && !!errors.amount}
                        helperText={!!touched.amount && !!errors.amount ? errors.amount : 'Valor do pagamento'}
                        className={classes.formInput}
                        fullWidth />

                      <FormControl variant="outlined" error={!!touched.payment_type && !!errors.payment_type} className={classes.formInput} fullWidth>
                        <InputLabel id="payment_type-select-label">Tipo de Pagamento</InputLabel>
                        <Select
                          labelId='payment_type-select-label'
                          id="payment_type"
                          name="payment_type"
                          value={values.payment_type}
                          onChange={handleChange}
                          error={!!touched.payment_type && !!errors.payment_type}
                          label='Tipo de pagamento'
                          fullWidth>
                          <MenuItem value="none">
                            <em>Selecionar</em>
                          </MenuItem>
                          <MenuItem value="refund">
                            Extorno
                           </MenuItem>
                          <MenuItem value="room_signal">
                            Sinal de reserva de quartos
                          </MenuItem>
                          <MenuItem value="parcel">
                            Pagamento de parcela
                          </MenuItem>
                        </Select>
                        <FormHelperText>
                          {!!touched.payment_type && !!errors.payment_type ? errors.payment_type : 'Ao que o pagamento se refere'}
                        </FormHelperText>
                      </FormControl>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={() => { resetForm(); setCurrentOrder(null); }} color="primary">
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


      <Typography variant='h6'>
        Todas as Reservas
      </Typography>
      {
        state.orders.map((item, index) => (
          <Paper key={index} className={classes.paper}>
            <div className={classes.paperTitleContainer}>
              <Typography variant='subtitle1' className={classes.ownerText}>{item.ownerName}</Typography>
              <Button color='secondary' onClick={() => setCurrentOrder(item)}>
                Registrar Pagamento
              </Button>
            </div>
            <Divider />
            <div className={classes.content}>


              <Grid container>
                <Grid item sm={4}>
                  <Typography variant="subtitle1">
                    Quartos
                    </Typography>
                  <Divider />
                  <List>
                    {
                      item.rooms.map((room, rIndex) => (
                        <ListItem key={rIndex}>
                          <ListItemText
                            primary={room.name}
                            secondary={numeral(room.price / 100).format('$0,0.00')} />
                        </ListItem>
                      ))
                    }
                  </List>
                </Grid>
                <Grid item sm={4}>
                  <Typography variant="subtitle1">
                    Inscrições
                    </Typography>
                  <Divider />
                  <List>
                    {
                      item.subscriptions.map((sub, rIndex) => (
                        <ListItem key={rIndex}>
                          <ListItemText
                            primary={sub.description}
                            secondary={numeral(sub.price / 100).format('$0,0.00')} />
                        </ListItem>
                      ))
                    }
                  </List>
                </Grid>
                <Grid item sm={4}>
                  <Typography variant="subtitle1">
                    Pagamentos
                    </Typography>
                  <Divider />
                  <List>
                    {
                      item.payments.map((payment, rIndex) => (
                        <ListItem key={rIndex}>
                          <ListItemText
                            primary={numeral(payment.amount / 100).format('$0,0.00')}
                            secondary={`${getPaymentTypeName(payment.type)} - ${moment(payment.insertedAt).format('DD/MM/YYYY')}`} />
                        </ListItem>
                      ))
                    }
                  </List>
                </Grid>
              </Grid>
            </div>
          </Paper>
        ))
      }

    </React.Fragment>
  )
}

export default () => (
  <Provider>
    {
      (props) => (
        <OrdersManagement {...props} />
      )
    }
  </Provider>
)