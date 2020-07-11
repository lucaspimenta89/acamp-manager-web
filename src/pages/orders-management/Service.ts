import ServiceBase from '../../lib/ServiceBase'

import { OrdersManagentState, ordersManagentState } from './store/State'

import {
  loadOrders,
  reset,
  setCurrentOrder,
  toggleIsLoading,
  OrdersManagementActions
} from './store/Actions'

import reducer from './store/Reducer'

import { 
  IGroupedOrders,
  IOrderRoom,
  IOrdersSummary,
  IPayment,
  ISubscriptionOrder,
  IPaymentPayload
} from './Interfaces'

import Http from '../../lib/Http'

import { sortBy } from 'lodash'

export class OrdersManagementService extends ServiceBase<OrdersManagentState, OrdersManagementActions> {
  constructor() {
    super(ordersManagentState)
  }

  reduce(state: OrdersManagentState, action: OrdersManagementActions): OrdersManagentState {
    return reducer(state, action)
  }

  reset() {
    this.dispatch(reset())
  }

  parseOrders(data: any[]): IGroupedOrders[] {
    const ordersPerOwner: { [key: string]: any[] } = data.reduce((acc, item) => {
      if (acc[item.owner.id]) {
        acc[item.owner.id] = [
          ...acc[item.owner.id],
          item
        ]
      } else {
        acc[item.owner.id] = [item]
      }
      return acc
    }, {} as { [key: string]: any[] })


    const orders = Object.entries(ordersPerOwner).map(([key, value]) => {
      const info = value.reduce((acc, order) => {
        return {
          ordersSummary: {
            ...acc.ordersSummary,
            [order.id]: order.inserted_at
          },
          rooms: [
            ...(acc.rooms || []),
            ...order.rooms.map((it: any) => ({
              price: it.price,
              name: it.name,
              description: it.description,
              type: it.type,
              orderId: order.id
            }))
          ],
          subscriptions: [
            ...(acc.subscriptions || []),
            ...order.subscriptions.map((it: any) => ({
              code: it.code,
              description: it.description,
              subscription_type: it.subscription_type,
              price: it.price,
              orderId: order.id
            }))
          ],
          payments: [
            ...(acc.payments || []),
            ...order.payments.map((it: any) => ({
              id: it.id,
              amount: it.amount,
              type: it.payment_type,
              insertedAt: it.inserted_at,
              orderId: order.id
            }))
          ]
        } 
      }, {} as {
        ordersSummary: IOrdersSummary,
        rooms: IOrderRoom[],
        subscriptions: ISubscriptionOrder[]
        payments: IPayment[]
      })

      return {
        ownerId: key,
        ownerName: value[0].owner.name,
        ...info
      }
    })

    return sortBy(orders, [(item) => item.ownerName.toLowerCase()] )
  }

  async loadAllOrders(): Promise<string | null> {
    this.dispatch(toggleIsLoading())

    const [result, , error] = await Http.get<any>('/orders/all-placed-orders')

    this.dispatch(toggleIsLoading())

    if (error) {
      return error
    }

    const orders = this.parseOrders(result?.data)

    this.dispatch(loadOrders(orders))

    return null
  } 

  setCurrentOrder(order: IGroupedOrders | null) {
    this.dispatch(setCurrentOrder(order))
  }

  validatePayment(payment: Partial<IPaymentPayload>): Partial<IPaymentPayload>{
    const result: Partial<IPaymentPayload> = {}

    if (!payment.amount || !parseFloat((payment.amount.replace(',', '.') || 0).toString())) {
      result.amount = 'Valor inválido'
    }

    if (payment.payment_type === 'none') {
      result.payment_type = 'Tipo de pagamento inválido'
    }

    return result
  }

  async registerPayment(payment: Partial<IPaymentPayload>): Promise<string | null> {
    this.dispatch(toggleIsLoading())

    const { currentOrder } = this.state

    let amount = Math.floor(parseFloat(payment.amount?.replace(',', '.') || '0') * 100)

    if (payment.payment_type === 'refund') {
      amount = -1 * amount
    }

    const [, , error] = await Http.post<any, any>('/payments', {
      ...payment,
      amount,
      order_id: parseInt(Object.keys(currentOrder?.ordersSummary || {})[0])
    })

    this.dispatch(toggleIsLoading())

    if (error) {
      return error
    }


    return this.loadAllOrders()
  }
}

let instance: OrdersManagementService | null = null

export default (() => {
  if (!instance) {
    instance = new OrdersManagementService()
  }

  return instance
})()
