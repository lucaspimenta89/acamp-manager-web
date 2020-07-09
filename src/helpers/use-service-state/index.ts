import { useState, useEffect } from 'react'
import ServiceBase from '../../lib/ServiceBase'

export default function useServiceState<TState, TAction>(
  instance: ServiceBase<TState, TAction>,
  resetOnUnmount: boolean = true
) {
  const [state, setState] = useState(instance.state)

  useEffect(() => {
    instance.addListener(instance.Events.onStateChange, setState)

    return () => {
      instance.removeListener(instance.Events.onStateChange, setState)

      if (resetOnUnmount) {
        instance.reset()
      }
    }
  }, [instance, resetOnUnmount])

  return state
}