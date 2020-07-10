import React from 'react'
import { Typography, List, ListItem, ListItemText, Paper } from '@material-ui/core'
import { IOrderSummaryViewProps } from './Interface'
import moment from 'moment'
import useStyles from './styles'

function getSubscriptionInfo(subscription_type: string) {
  switch(subscription_type) {
    case 'full':
      return "Maiores de 12 anos"
    case 'half':
      return "Criança de 6 a 11 anos e 11 meses"
    case 'zero':
      return "Crianças de 0 a 5 anos e 11 meses"
    default:
      return "Não especificado"
  }
}

const OrderSummary: React.FC<IOrderSummaryViewProps> = ({ 
  insertedAt,
  rooms,
  subscriptions
}) => {
  const classes = useStyles({})

  return (
    <Paper className={classes.paper}>
      <div className={classes.root}>
        <div>
          <Typography variant='subtitle1'>
            Reserva efetuada em {moment(insertedAt).format('DD/MM/YYYY')}
          </Typography>
        </div>
        <div className={classes.details}>
          <div className={classes.detailsItem}>
            <Typography variant="subtitle2">
              Quartos
            </Typography>
            <List>
              {
                rooms.map((room, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={room.name} secondary={room.description} />
                  </ListItem>
                ))
              }
            </List>
          </div>
          <div className={classes.detailsItem}>
            <Typography variant="subtitle2">
              Inscrições
            </Typography>
            {
              subscriptions.map((sub, index) => (
                <ListItem key={index}>
                  <ListItemText primary={sub.description} secondary={getSubscriptionInfo(sub.subscription_type)} />
                </ListItem>
              ))
            }
          </div>
        </div>
      </div>
    </Paper>
  )
}

export default OrderSummary