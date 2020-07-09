import { useCallback } from 'react'
import { useSnackbar, VariantType } from 'notistack'

export default function useNotification() {
  const { enqueueSnackbar } = useSnackbar()

  const emitNotification = useCallback(
    (message: string, variant: VariantType) => {
      enqueueSnackbar(message, {
        variant,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        }
      })
    },
    [enqueueSnackbar]
  )

  const emitSuccess = useCallback(
    (message: string) => {
      emitNotification(message, 'success')
    },
    [emitNotification]
  )

  const emitError = useCallback(
    (message: string) => {
      emitNotification(message, 'error')
    },
    [emitNotification]
  )

  const emitInfo = useCallback(
    (message: string) => {
      emitNotification(message, 'info')
    },
    [emitNotification]
  )

  const emitWarning = useCallback(
    (message: string) => {
      emitNotification(message, 'warning')
    },
    [emitNotification]
  )

  return {
    emitSuccess,
    emitError,
    emitInfo,
    emitWarning
  }
}