import React from 'react'
import useStyles from './Dashboard.styles'
import {
  IDashboardViewProps, RoomPaymentMethod, SubscriptionType
} from './Interface'
import Provider from './Provider'
import { Typography, ListItem, List, Paper, Grid, ListItemText, ListItemSecondaryAction, Button, Dialog, DialogTitle, DialogContent, FormControl, InputLabel, Select, MenuItem, FormHelperText, DialogActions, Divider } from '@material-ui/core'
import OrderSummary from '../../components/OrderSummary'
import numeral from 'numeral'

import RoomStoreItem from '../../components/RoomStoreItem'
import VoucherStoreItem from '../../components/VoucherStoreItem'

import 'numeral/locales/pt-br'
numeral.locale('pt-br')



const DashboardView: React.FC<IDashboardViewProps> = ({
  addRoomToCart,
  addSubscription,
  removeRoomFromCart,
  removeSubscription,
  setRoomPaymentMethod,
  setSubscriptionsPaymentMethod,
  state,
  submitOrder,
  toggleTermsDialog
}) => {
  const classes = useStyles({})

  const subscriptionsTypes = [
    {
      name: 'Inteira',
      description: 'Para maiores de 12 anos de idade',
      subscription_type: 'full',
      price: 22000
    },
    {
      name: 'Meia entrada',
      description: 'Para crianças de 6 à 12 anos de idade',
      subscription_type: 'half',
      price: 11000
    },
    {
      name: 'Isenta',
      description: 'Para crianças de 0 à 5 anos e 11 meses de idade',
      subscription_type: 'zero',
      price: 0
    }
  ]

  return (
    <React.Fragment>

      <Dialog 
        open={state.isTermsDialogOpen}
        onClose={toggleTermsDialog}
        aria-labelledby="terms-of-service-dialog">
        <DialogTitle id="terms-of-service-dialog">
          Forma de pagamento e termos de serviço
        </DialogTitle>
        <DialogContent>
          <Typography variant='h6'>
            Formas de pagamento
          </Typography>
          {
            !!state.cart.room && (
              <FormControl 
                variant="outlined" 
                className={classes.formInput} 
                fullWidth>
                <InputLabel id="church-select-label">Forma de pagamento dos quartos</InputLabel>
                <Select 
                  labelId='church-select-label'
                  id="church-select"
                  name="church"
                  value={state.cart.paymentMethod.roomPaymentMethod}
                  onChange={(event) => setRoomPaymentMethod(event.target.value as RoomPaymentMethod)}                  
                  label='Forma de pagamento dos quartos'
                  fullWidth>
                  <MenuItem value="none">
                    <em>Selecionar</em>
                  </MenuItem>
                  <MenuItem value="a-vista">
                    A vista
                  </MenuItem>
                  <MenuItem value="sinal-parcelado">
                    Sinal de 50% + Parcelas
                  </MenuItem>
                  <MenuItem value="cartao-de-credito">
                    Cartao de Crédito
                  </MenuItem>
                </Select>
                <FormHelperText>
                  {
                    state.cart.paymentMethod.roomPaymentMethod === 'cartao-de-credito'
                      ? (
                        <p className={classes.error}>
                          Atenção! Essa forma de pagamento possui juros e o valor será diferente na hora do pagamento. Os juros também não serão ressarcidos em caso de cancelamento ou desistência
                        </p>
                      )
                      : 'Selecione a forma de pagamento'
                  }
                </FormHelperText>
              </FormControl>
            )
          }
          {
            <FormControl 
                variant="outlined" 
                className={classes.formInput} 
                fullWidth>
                <InputLabel id="church-select-label">Forma de pagamento das inscrições</InputLabel>
                <Select 
                  labelId='church-select-label'
                  id="church-select"
                  name="church"
                  value={state.cart.paymentMethod.subscriptionPaymentMethod}
                  onChange={(event) => setSubscriptionsPaymentMethod(event.target.value as RoomPaymentMethod)}                  
                  label='Forma de pagamento das inscrições'
                  fullWidth>
                  <MenuItem value="none">
                    <em>Selecionar</em>
                  </MenuItem>
                  <MenuItem value="a-vista">
                    A vista
                  </MenuItem>
                  <MenuItem value="sinal-parcelado">
                    Sinal + Parcelas
                  </MenuItem>
                  <MenuItem value="parcelado">
                    Parcelas
                  </MenuItem>
                  <MenuItem value="cartao-de-credito">
                    Cartao de Crédito
                  </MenuItem>
                </Select>
                <FormHelperText>
                  {
                    state.cart.paymentMethod.subscriptionPaymentMethod === 'cartao-de-credito'
                      ? (
                        <p className={classes.error}>
                          Atenção! Essa forma de pagamento possui juros e o valor será diferente na hora do pagamento. Os juros também não serão ressarcidos em caso de cancelamento ou desistência
                        </p>
                      )
                      : 'Selecione a forma de pagamento'
                  }
                </FormHelperText>
              </FormControl>
          }
          <Typography variant='h6'>
            Termos de Serviço
          </Typography>
          <Typography variant='body1' className={classes.paragraph}>
            Concordo que, caso esteja em vigor um decreto ou orientação do poder público que venha recomendar ou proibir a aglomeração de pessoas, ou realização de eventos, o Acampamento Jovem 2021, será cancelado.
          </Typography>
          <Typography variant='body1' className={classes.paragraph}>
            Concordo que, na impossibilidade de ocorrer o Acampamento Jovem 2021, os pagamentos até então acertados, serão devolvidos aos acampantes no prazo de 10 dias, após a data do cancelamento.
          </Typography>
          <Typography variant='body1' className={classes.paragraph}>
            Concordo que, no caso de desistência do acampante, o mesmo receberá a devolução do valor pago, seguuindo os seguintes critérios:
          </Typography>
          <Typography variant='body1' className={classes.paragraph}>
            - Desistência até 10/12/2020, o acampante receberá 100% do valor pago
          </Typography>
          <Typography variant='body1' className={classes.paragraph}>
            - Desistência até 10/01/2021, o acampante receberá apenas 90% do valor pago
          </Typography>
          <Typography variant='body1' className={classes.paragraph}>
            - Desistência até 08/02/2021, o acampante receberá apenas 70% do valor pago
          </Typography>          
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleTermsDialog} color="primary">
            Cancelar
          </Button>
          <Button onClick={submitOrder} 
            color='primary' 
            disabled={state.isLoading || (state.cart.room && state.cart.paymentMethod.roomPaymentMethod === 'none') || (state.cart.subscriptions.length > 0 && state.cart.paymentMethod.subscriptionPaymentMethod === 'none')}>
            Efetuar minha reserva
          </Button>
        </DialogActions>
      </Dialog>


      <Paper className={classes.myOrdersPaper}>
        <Typography variant='h6'>
          Minhas Reservas
        </Typography>
        <List>
          {
            state.previousOrders.map(it => (
              <ListItem key={it.id}>
                <OrderSummary  
                  id={it.id}
                  insertedAt={it.inserted_at}
                  rooms={it.rooms}
                  subscriptions={it.subscriptions} />
              </ListItem>
            ))
          }          
        </List>
        {
          state.previousOrders.length === 0 && (
            <Typography variant='body1' align='center'>
              Nenhuma reserva encontrada
            </Typography>
          )
        }
      </Paper>
      <Paper className={classes.reservationPaper}>
        <Typography variant='h6'>
          Nova reserva
        </Typography>
        <Typography variant="subtitle1">
          Adicione todos os items que você deseja reservar e depois clique em <strong>"EFETUAR RESERVA"</strong>.
        </Typography>
        <Typography variant="subtitle1">
          É permitido apenas 1 quarto por ordem de reseva, para reservar multiplos quartos repita o processo adicionando o
          quarto desejado e efetuando a reserva.
        </Typography>
        <Typography variant="subtitle1">
          Você pode reservar quantas inscrições desejar, fique atento aos critérios da reservar.
          Lembrando que serão reservados apenas os vouchers, em outro momento será necessário o preenchimento
          das fichas de cada acampante.
        </Typography>
        <Divider className={classes.divider} />
        <Grid container spacing={2} >          
          <Grid item sm={9}>
            <Grid container>
              <Grid item sm={6}>                
                <Typography variant='h6'>
                  Vouchers de inscrição
                </Typography>
                {
                  subscriptionsTypes.map((it, index) => (
                    <VoucherStoreItem 
                      key={index}
                      description={it.description}
                      name={it.name}
                      price={it.price}
                      subscriptionType={it.subscription_type}
                      onAddVoucher={
                        () => {
                          addSubscription({
                            description: it.name,
                            price: it.price,
                            subscription_type: it.subscription_type as SubscriptionType
                          })
                        }
                      }
                    />
                  ))
                }                          
              </Grid>
              <Grid item sm={6}>
                {
                  state.availableRooms.length > 0 && (
                    <React.Fragment>
                      <Typography variant='h6'>
                        Quartos
                      </Typography>
                      <div className={classes.roomsContainer}>
                        {
                          state.availableRooms.map((item, index) => (
                            <RoomStoreItem 
                              key={index}
                              id={item.id}
                              description={item.description}
                              name={item.name}
                              price={item.price}
                              type={item.type}  
                              onAddToCart={() => addRoomToCart(item)}
                              disabled={!!state.cart.room}                          
                            />
                          ))
                        }
                      </div>
                    </React.Fragment>
                  )
                }                
              </Grid>
            </Grid>            
          </Grid>
          <Grid item sm={3}>
            <Paper className={classes.cartPaper} >            
              <Typography variant='h6'>
                Items da reserva
              </Typography>
              
              <List>
                {
                  !!state.cart.room && (
                    <ListItem>
                      <ListItemText 
                        primary={state.cart.room.name}
                        secondary={numeral(state.cart.room.price / 100).format('$0,0.00') } />
                      <ListItemSecondaryAction>
                        <Button 
                          color='primary' 
                          type='button' 
                          variant='contained'
                          onClick={() => removeRoomFromCart(state.cart.room?.id as string)}>
                          REMOVER
                        </Button>
                      </ListItemSecondaryAction>
                    </ListItem>
                  )   
                }

                {
                  state.cart.subscriptions.map((it, index) => (
                    <ListItem key={index}>
                      <ListItemText 
                        primary={it.description}
                        secondary={numeral(it.price / 100).format('$0,0.00') } />
                      <ListItemSecondaryAction>
                        <Button 
                          color='primary' 
                          type='button' 
                          variant='contained'
                          onClick={() => removeSubscription(index)}>
                          REMOVER
                        </Button>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))
                }
              </List>

              <Button 
                variant='contained'
                color='secondary'
                onClick={() => toggleTermsDialog()}
                disabled={!state.cart.room && state.cart.subscriptions.length === 0 }
                fullWidth>
                EFETUAR RESERVA
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  )
}

export default () => (
  <Provider>
    {
      (props: IDashboardViewProps) => (
        <DashboardView {...props} />
      )
    }
  </Provider>
)

