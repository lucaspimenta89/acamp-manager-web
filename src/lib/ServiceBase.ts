import { EventEmitter } from 'events'

export const ProviderBaseEvents = {
  onStateChange: 'onStateChange'
}

export default abstract class ServiceProviderBase<TState, TActionTypes> extends EventEmitter {
  private _state: TState

  readonly Events = ProviderBaseEvents

  get state(): TState {
    return this._state
  }

  set state(newState: TState) {
    this._state = newState
    this.notifyListeners(ProviderBaseEvents.onStateChange, this._state)
  }

  abstract reduce(state: TState, action: TActionTypes): TState

  abstract reset(): void

  notifyListeners<TArgs>(event: string, args?: TArgs) {
    this.emit(event, args)
  }

  dispatch(action: TActionTypes): void {
    const newState = this.reduce(this._state, action)
    this.state = newState
  }

  constructor(initialState: TState) {
    super()
    this._state = initialState
  }
}