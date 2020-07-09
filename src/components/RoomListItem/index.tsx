import React from 'react'
import { IRoomListItemProps } from './Interfaces'
import useStyles from './styles'
import { Typography } from '@material-ui/core'

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
        <img src='http://lorempixel.com/240/240/city/' alt={type} />
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