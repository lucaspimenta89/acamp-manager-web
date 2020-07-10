import { DashboardState } from "./store/State"
import { ReactElement } from "react"

export type SubscriptionType = 'full' | 'half' | 'zero'

export interface ISubscriptionOrderItem {
  description: string,
  price: number,
  subscription_type: SubscriptionType  
}

export interface IOrderItem {
  roomId?: string,
  subscription: ISubscriptionOrderItem
}

export interface IRoom {
  id: string,
  name: string,
  description: string,
  type: string,
  price: number
}

export interface ISubscription {
  id: string,
  code: string,
  description: string,
  subscription_type: string,
  price: number
}

export interface IOrder {
  id: string,
  code: string,
  inserted_at: string
  room_payment_method: string,
  subscriptions_payment_method: string,
  rooms: IRoom[]
  subscriptions: ISubscription[]
}


export interface ILockAndUnlockRoomPayload {
  room_id: string
}

export type RoomPaymentMethod = 'none' | 'a-vista' | 'sinal-parcelado' | 'cartao-de-credito'
export type SubscriptionPaymentMethod = 'none' | 'a-vista' | 'sinal-parcelado' | 'cartao-de-credito' | 'parcelado'

export interface IPaymentMenthod {
  roomPaymentMethod: RoomPaymentMethod
  subscriptionPaymentMethod: SubscriptionPaymentMethod
}

export interface IOrderCreationPayload {
  rooms: { id?: string }[]
  room_payment_method: RoomPaymentMethod,
  subscriptions: {
    description: string,
    price: number,
    subscription_type: string
  }[],
  subscriptions_payment_method: SubscriptionPaymentMethod
}

export interface IDashboardViewProps {
  state: DashboardState,
  addRoomToCart: (room: IRoom) => Promise<void>
  addSubscription: (info: ISubscriptionOrderItem) => void,
  removeRoomFromCart: (roomId: string) => Promise<void>
  removeSubscription: (index: number) => void
  clearCartItems: () => Promise<void>
  submitOrder: () => Promise<void>
  toggleTermsDialog: () => void
  setRoomPaymentMethod: (method: RoomPaymentMethod) => void,
  setSubscriptionsPaymentMethod: (method: SubscriptionPaymentMethod) => void
}

export interface IDashboardProviderProps {
  children: (props: IDashboardViewProps) => ReactElement
}