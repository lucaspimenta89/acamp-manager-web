import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  hero: {
    width: '100%',
    minHeight: '30vh',
    margin: '0 0 30px 0',
    padding: 0,
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    position: 'relative',
  }, 
  heroContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',      
      justifyContent: 'center',
    }
  },
  heroTitle: {
    color: 'rgba(255, 255, 255, .8)',
    width: '50%',
    [theme.breakpoints.down('md')]: {      
      textAlign: "center",
      width: '100%'
    }
  },
  sectionTitleLocal: {
    marginBottom: '20px !important'
  },
  sectionTitle: {
    margin: '20px 0 20px 0 !important' 
  },
  videosContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    margin: '25px 0 25px 0'
  },
  tabContainer: {
    minHeight: 500,
    padding: 15
  },
  paragraph: {
    marginBottom: '15px'
  }
}))