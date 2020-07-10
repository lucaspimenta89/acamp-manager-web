import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
  },
  title: {
    flexGrow: 1
  },
  icon: {
    color: '#ffffff'
  },
  homeButton: {
    textDecoration: 'none',
    color: '#ffffff',
    fontSize: '18px',
    fontWeight: 400,
    '&:hover': {
      textDecoration: 'none',
    }
  }
}))