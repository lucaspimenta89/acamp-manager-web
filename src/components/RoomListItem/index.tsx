import React from 'react'
import { IRoomListItemProps } from './Interfaces'
import useStyles from './styles'
import { Typography } from '@material-ui/core'

import {
  Master,
  MasterDeluxe,
  MasterPlus,
  Quiosque,
  Standard,
  StandardPlus
} from '../../assets'

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

const RoomListItem: React.FC<IRoomListItemProps> = ({
  type,
  name,
  description,
  price 
}) => {
  const classes = useStyles({})
  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        <img src={getImageForRoomType(type)} alt={type} />
      </div>
      <div className={classes.description}>
        <Typography variant='h6'>
          {name}
        </Typography>
        <Typography variant='subtitle1'>
          {description}
        </Typography>
      </div>
      <div className={classes.priceContainer}>
        <Typography variant='h6'>
          R$ {price}
        </Typography>
      </div>
    </div>
  )
}

export default RoomListItem