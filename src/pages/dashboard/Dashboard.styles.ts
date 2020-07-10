import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({ 
  root: { },
  myOrdersPaper: {
    padding: '15px',
    marginBottom: '15px'
  },
  reservationPaper: {
    padding: '15px',
  },
  cartPaper: {
    padding: '15px',
  },
  formInput: {
    marginBottom: '15px',
    marginTop: '15px'
  },
  error: {
    color: 'red',
    fontWeight: 'bold'
  },
  paragraph: {
    margin: '15px 0 15px 0'
  },
  divider: {
    margin: '25px 0'
  },
  roomsContainer: {
    maxHeight: '450px',
    overflowY: 'auto'
  }
}))