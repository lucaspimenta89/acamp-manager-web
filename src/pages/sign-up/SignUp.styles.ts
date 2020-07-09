import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({ 
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    width: '500px',
    padding: '15px'
  },
  formTitle: {
    marginBottom: '15px'
  },
  formInput: {
    marginBottom: '15px'
  }
}))