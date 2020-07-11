import { IGroupedOrders } from "../Interfaces"

export const RESET = 'RESET'
export const LOAD_ORDERS = 'LOAD_ORDERS'
export const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'
export const SET_CURRENT_ORDER  = 'SET_CURRENT_ORDER'

export function reset() {
  return {
    type: RESET,
    payload: {}
  } as const
}

export function loadOrders(orders: IGroupedOrders[]) {
  return {
    type: LOAD_ORDERS,
    payload: orders
  } as const
}

export function toggleIsLoading() {
  return {
    type: TOGGLE_IS_LOADING,
    payload: {}
  } as const
}

export function setCurrentOrder(order: IGroupedOrders | null) {
  return {
    type: SET_CURRENT_ORDER,
    payload: order
  } as const
}

export type OrdersManagementActions = ReturnType<
  typeof reset
  | typeof loadOrders
  | typeof toggleIsLoading
  | typeof setCurrentOrder
>