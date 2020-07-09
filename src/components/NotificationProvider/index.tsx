import React, { useRef } from 'react'
import useStyles from './Notification.styles'
import { SnackbarProvider } from 'notistack'
import IconButton from '@material-ui/core/IconButton'
import HighlightOffSharpIcon from '@material-ui/icons/HighlightOff'
import { INotificationProviderProps } from './Interfaces'
import { SnackbarOrigin } from '@material-ui/core/Snackbar'

const NotificationProvider: React.FC<INotificationProviderProps> = ({ children }) => {
  const classes = useStyles({})
  const snack = useRef(null)

  const anchorOrigin = {
    vertical: 'top',
    horizontal: 'center'
  }

  const handleClick = (key: React.ReactText) => {
    if (snack && !!snack.current) {
      (snack.current as any).closeSnackbar(key)
    }
  }

  return (
    <SnackbarProvider
      maxSnack={1}
      hideIconVariant
      ref={snack}
      anchorOrigin={{ ...anchorOrigin } as SnackbarOrigin}
      preventDuplicate
      action={key => (
        <IconButton size="small" aria-label="close" color="inherit" onClick={() => handleClick(key)}>
          <HighlightOffSharpIcon fontSize="small" />
        </IconButton>
      )}
      ContentProps={{
        classes: {
          root: classes.root
        }
      }}
    >
      {children}
    </SnackbarProvider>
  )
}

export default React.memo(NotificationProvider)