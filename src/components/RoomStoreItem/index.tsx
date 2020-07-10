import React from 'react'
import { Paper, Typography, Button } from '@material-ui/core'
import 'numeral/locales/pt-br'
import numeral from 'numeral'
import useStyles from './style'

import { IRoomStoreItemProps } from './Interface'

import {
  Master,
  MasterDeluxe,
  MasterPlus,
  Quiosque,
  Standard,
  StandardPlus
} from '../../assets'

numeral.locale('pt-br')

function getImageForRoomType(type: string): any {
  switch(type) {
    case 'master-deluxe':
      return MasterDeluxe
    case 'master-plus':
      return MasterPlus
    case 'master':
      return Master
    case 'standard-plus':
      return StandardPlus
    case 'standard':
      return Standard
    case 'quiosque':
      return Quiosque
    default:
      return ''
  }
}

const RoomStoreItem: React.FC<IRoomStoreItemProps> = ({
  description,
  disabled,
  name,
  onAddToCart,
  price,
  type
}) => {
  const classes = useStyles({})
  return (
    <Paper className={classes.paper}> 
      <div className={classes.content} >
        <div className={classes.imageContainer}>
          <img src={getImageForRoomType(type)} alt={type} />
        </div>
        <div className={classes.descriptionContainer}>
          <Typography variant='h6'>
            {name}
          </Typography>
          <p>
            {description}
          </p>
          <Typography variant='h6'>
            {numeral(price / 100).format('$0,0.00')}
          </Typography>
        </div>
      </div>
      <div className={classes.actionsContainer}>
        <Button 
          color="secondary" 
          type="button"
          onClick={onAddToCart}
          disabled={disabled}>
          ADICIONAR
        </Button>
      </div>
    </Paper>
  )
}

export default RoomStoreItem