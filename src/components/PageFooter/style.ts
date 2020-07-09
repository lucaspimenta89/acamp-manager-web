import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: { 
    marginTop: 15,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  }
}))