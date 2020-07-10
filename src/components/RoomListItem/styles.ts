import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  paper: {
    padding: '15px',
    maxWidth: '560px',
    margin: '10px'
  },
  root: { 
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }
  },
  imageContainer: {
    width: 180,
    height: 180,
    '& img': {
      width: 180,
      height: 180,
    }
  },
  description: {    
    flexGrow: 1,
    padding: 15
  },
  priceContainer: {
    minWidth: 100  
  },
  descriptionText: {
    
  }
}))