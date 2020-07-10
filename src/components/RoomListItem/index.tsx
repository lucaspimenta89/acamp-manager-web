import React from 'react'
import { IRoomListItemProps } from './Interfaces'
import useStyles from './styles'
import { Typography, Paper } from '@material-ui/core'

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
    <Paper className={classes.paper}>
      <div className={classes.root}>
        <div className={classes.imageContainer}>
          <img src={getImageForRoomType(type)} alt={type} />
        </div>
        <div className={classes.description}>
          <Typography variant='h6'>
            {name}
          </Typography>
          <p className={classes.descriptionText}>
            {description}
          </p>
          <Typography variant='h6'>
            R$ {price}
          </Typography>
        </div>
      </div>
    </Paper>
    
  )
}

export default RoomListItem