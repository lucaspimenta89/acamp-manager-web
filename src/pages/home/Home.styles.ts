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
    [theme.breakpoints.down('md')]: {
      marginTop: '-10px'
    }
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
      width: '100%',
      fontSize: '30px',
      marginBottom: '30px'
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
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
    margin: '25px 0 25px 0'
  },
  tabContainer: {
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  paragraph: {
    marginBottom: '15px'
  },
  sectionTitlePill: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    borderRadius: '12px',
    fontSize: '18px',
    fontWeight: 400,
    padding: '10px',
    marginBottom: '15px',
    marginTop: '15px'
  }
}))