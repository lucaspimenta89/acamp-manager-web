import ServiceBase from '../../lib/ServiceBase'

import {
  DashboardState,
  dashboardState
} from './store/State'

import {
  DashboardActions,
  addRoomToCart,
  removeRoomFromCart,
  addSubscriptionToCart,
  removeSubscriptionFromCart,
  removeAllItemsFromCart,
  reset,
  setAvailableRooms,
  setPreviousOrders,
  setRoomPaymentMethod,
  setSubscriptionPaymentMethod,
  toggleIsLoading,
  toggleIsLoadingAvailableRooms,
  toggleIsLoadingPreviousOrders,
  toggleTermsDialog
} from './store/Actions'

import reducer from './store/Reducer'

import {
  IOrder,
  IRoom,
  ISubscriptionOrderItem,
  ILockAndUnlockRoomPayload,
  RoomPaymentMethod,
  SubscriptionPaymentMethod,
  IOrderCreationPayload
} from './Interface'

import Http from '../../lib/Http'

export class DashboardService extends ServiceBase<DashboardState, DashboardActions> {
  constructor() {
    super(dashboardState)
  }

  reduce(state: DashboardState, action: DashboardActions): DashboardState {
    return reducer(state, action)
  }

  async loadAvailableRooms(): Promise<string | null> {
    this.dispatch(toggleIsLoadingAvailableRooms())

    const [rooms, status, error] = await Http.get<IRoom[]>('/rooms/available')

    this.dispatch(toggleIsLoadingAvailableRooms())

    if (status === 200) {
      this.dispatch(setAvailableRooms(rooms?.data || []))
    }

    return error
  }

  async loadPreviousOrders(): Promise<string | null> {
    this.dispatch(toggleIsLoadingPreviousOrders())

    const [orders, status, error] = await Http.get<IOrder[]>('/orders/my-orders')
    
    this.dispatch(toggleIsLoadingPreviousOrders())

    if (status === 200) {
      this.dispatch(setPreviousOrders(orders?.data || []))
    }

    return error
  }

  async lockRoom(roomId: string): Promise<string | null> {
    this.dispatch(toggleIsLoading())

    const [, , error] = await Http
      .put<ILockAndUnlockRoomPayload, string>('/rooms/lock', { room_id: roomId })

    this.dispatch(toggleIsLoading())

    return error
  }

  async unlockRoom(roomId: string): Promise<string | null> {
    this.dispatch(toggleIsLoading())

    const [, , error] = await Http
      .put<ILockAndUnlockRoomPayload, string>('/rooms/unlock', { room_id: roomId })

    this.dispatch(toggleIsLoading())
    
    return error
  }

  async addRoomToCart(room: IRoom): Promise<string | null>  {
    console.log('@@@@@@@', room)
    const error = await this.lockRoom(room.id)

    if (error) {
      return error
    }

    this.dispatch(addRoomToCart(room))

    return null
  }

  async removeRoomFromCart(roomId: string): Promise<string | null> {
    const error = await this.unlockRoom(roomId)

    if (error) {
      return error
    }

    this.dispatch(removeRoomFromCart())

    return null
  }

  addSusbcriptionToCart(subscription: ISubscriptionOrderItem) {
    this.dispatch(addSubscriptionToCart(subscription))
  }

  removeSusbcriptionFromCart(index: number) {
    this.dispatch(removeSubscriptionFromCart(index))
  }

  async removeAllItemsFromCart(): Promise<string | null> {
    if (this.state.cart.room) {
      const error = this.unlockRoom(this.state.cart.room.id)

      if (error) {
        return error
      }
    }

    this.dispatch(removeAllItemsFromCart())

    return null
  }

  setRoomPaymentMethod(method: RoomPaymentMethod) {
    this.dispatch(setRoomPaymentMethod(method))
  }

  setSubscriptionPaymentMethod(method: SubscriptionPaymentMethod) {
    this.dispatch(setSubscriptionPaymentMethod(method))
  }

  parseCartToOrderPayload(): IOrderCreationPayload {
    return {
      rooms: !!this.state.cart.room ? [{ id: this.state.cart.room?.id }] : [],
      room_payment_method: this.state.cart.paymentMethod.roomPaymentMethod,
      subscriptions: this.state.cart.subscriptions.map(it => ({
        description: it.description,
        price: it.price,
        subscription_type: it.subscription_type
      })),
      subscriptions_payment_method: this.state.cart.paymentMethod.subscriptionPaymentMethod
    }
  }

  async createOrder(): Promise<string | null> {
    const payload = this.parseCartToOrderPayload()

    this.dispatch(toggleIsLoading())

    const [, , error] = await Http
      .post<IOrderCreationPayload, IOrder>('/orders', payload)

    this.dispatch(toggleIsLoading())
    
    if (error) {
      return error
    }

    this.reset()
    
    await this.loadAvailableRooms()
    await this.loadPreviousOrders()
    
    return null
  }

  toggleTermsDialog() {
    this.dispatch(toggleTermsDialog())
  }

  reset() {
    this.dispatch(reset())
  }
}

let instance: DashboardService | null = null

export default (() => {
  if (!instance) {
    instance = new DashboardService()
  }
  return instance
})()
