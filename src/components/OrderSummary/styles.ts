import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({ 
  root: { 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  paper: {
    padding: '15px',
    marginBottom: '10px',
    width: '100%'
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
    justifyContent: 'space-between',
    width: '100%'
  },
  detailsItem: {
    width: '50%',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  }
}))