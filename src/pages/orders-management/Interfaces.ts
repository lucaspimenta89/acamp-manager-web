import { ReactElement } from "react";
import { OrdersManagentState } from "./store/State";

export interface IOrderRoom {
  price: number
  name: string,
  description: string
  type: string,
  orderId: string
}

export interface ISubscriptionOrder {
  code: string
  description: string
  subscription_type: string
  price: number
  orderId: string
}

export interface IPayment {
  amount: number
  insertedAt: string
  type: string
  orderId: string
}

export interface IOrdersSummary {
  [key: string]: string
}

export interface IGroupedOrders {
  ownerId: string
  ownerName: string,
  ordersSummary: IOrdersSummary,
  rooms: IOrderRoom[],
  subscriptions: ISubscriptionOrder[]
  payments: IPayment[]
}

export type PaymentType = 'none' | 'refund' | 'room_signal' | 'parcel'

export interface IPaymentPayload {
  amount: string
  payment_type: PaymentType | string
  order_id: string
}

export interface IOrdersManagementViewProps {
  state: OrdersManagentState,
  setCurrentOrder: (order: IGroupedOrders | null) => void
  registerPayment: (payment: Partial<IPaymentPayload>) => Promise<boolean>
  validatePayment: (payment: Partial<IPaymentPayload>) => Partial<IPaymentPayload>
}

export interface IOrdersManagementProviderProps {
  children(props: IOrdersManagementViewProps): ReactElement
} 