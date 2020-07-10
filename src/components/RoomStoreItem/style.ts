import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  paper: {
    padding: '15px',
    maxWidth: '560px',
    margin: '10px'
  },
  content: {
    padding: '15px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }
  },
  imageContainer: {
    width: '180px',
    height: '180px',
    "& img": {
      width: '180px',
      height: '180px',
    }
  },
  descriptionContainer: {
    padding: '10px'
  },
  actionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}))