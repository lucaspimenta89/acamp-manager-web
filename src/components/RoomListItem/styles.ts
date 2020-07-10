import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: { 
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  imageContainer: {
    width: 240,
    height: 240,
    '& img': {
      width: 240,
      height: 240,
    }
  },
  description: {    
    flexGrow: 1,
    padding: 15
  },
  priceContainer: {
    minWidth: 100  
  }
}))