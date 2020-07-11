import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({ 
  root: { },
  content: {
    padding: '15px'
  },
  paper: {
    marginBottom: '15px'
  },
  ownerText: {
    fontWeight: 'bold'
  },
  paperTitleContainer: {
    padding: '15px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  formInput: {
    marginBottom: '15px'
  }
}))