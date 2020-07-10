import React from 'react'
import useStyles from './style'
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import { IVoucherStoreItemProps } from './Interface'
import { Paper, Typography, Button } from '@material-ui/core';
import 'numeral/locales/pt-br'

import numeral from 'numeral'
numeral.locale('pt-br')

const VoucherStoreItem: React.FC<IVoucherStoreItemProps> = ({ 
  description,
  name,
  onAddVoucher,
  price
}) => {
  const classes = useStyles({})

  return (
    <Paper className={classes.paper}>
      <div className={classes.content}>
        <div className={classes.imageContainer}>
          <ConfirmationNumberIcon className={classes.icon} />
        </div>
        <div className={classes.descriptionContainer}>
          <Typography variant='h6'>
            {name}
          </Typography>
          <Typography variant='subtitle1'>
            {description}
          </Typography>
          <Typography variant='h6'>
            {numeral(price > 0 ? price / 100 : 0).format('$0,0.00')}
          </Typography>
        </div>        
      </div>
      <div className={classes.actionsContainer}>
        <Button 
          color="secondary" 
          type="button"
          onClick={() => onAddVoucher()}>
          ADICIONAR
        </Button>
      </div>
    </Paper>
  )
}

export default VoucherStoreItem