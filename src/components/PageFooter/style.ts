import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: { 
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%'
  }
}))