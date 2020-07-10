import { IOrder, IRoom, RoomPaymentMethod, SubscriptionPaymentMethod, ISubscriptionOrderItem } from "../Interface"

export const RESET = 'RESET'
export const SET_PREVIOUS_ORDERS = 'SET_PREVIOUS_ORDERS'
export const SET_AVAILABLE_ROOMS = 'SET_AVAILABLE_ROOMS'
export const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'

export const ADD_ROOM_TO_CART = 'ADD_ROOM_TO_CART'
export const REMOVE_ROOM_FROM_CART = 'REMOVE_ROOM_FROM_CART'
export const ADD_SUBSCRIPTION_TO_CART = 'ADD_SUBSCRIPTION_TO_CART'
export const REMOVE_SUBSCRIPTION_FROM_CART = 'REMOVE_SUBSCRIPTION_FROM_CART'

export const REMOVE_ALL_ITEMS_FROM_CART = 'REMOVE_ALL_ITEMS_FROM_CART'

export const SET_ROOM_PAYMENT_METHOD = 'SET_ROOM_PAYMENT_METHOD'
export const SET_SUBSCRIPTION_PAYMENT_METHOD = 'SET_SUBSCRIPTION_PAYMENT_METHOD'
export const TOGGLE_IS_LOADING_PREVIOUS_ORDERS = 'TOGGLE_IS_LOADING_PREVIOUS_ORDERS'
export const TOGGLE_IS_LOADING_AVAILABLE_ROOMS = 'TOGGLE_IS_LOADING_AVAILABLE_ROOMS'
export const TOGGLE_TERMS_DIALOG = 'TOGGLE_TERMS_DIALOG'

export function reset() {
  return {
    type: RESET,
    payload: {}
  } as const
}

export function setPreviousOrders(payload: IOrder[]) {
  return {
    type: SET_PREVIOUS_ORDERS,
    payload
  } as const
}

export function setAvailableRooms(payload: IRoom[]) {
  return {
    type: SET_AVAILABLE_ROOMS,
    payload
  } as const
}

export function toggleIsLoading() {
  return {
    type: TOGGLE_IS_LOADING,
    payload: {}
  } as const
}

export function addRoomToCart(payload: IRoom) {
  return {
    type: ADD_ROOM_TO_CART,
    payload
  } as const
}

export function removeRoomFromCart() {
  return {
    type: REMOVE_ROOM_FROM_CART,
    payload: {}
  } as const
}

export function addSubscriptionToCart(payload: ISubscriptionOrderItem) {
  return {
    type: ADD_SUBSCRIPTION_TO_CART,
    payload
  } as const
}

export function removeSubscriptionFromCart(itemIndex: number) {
  return {
    type: REMOVE_SUBSCRIPTION_FROM_CART,
    payload: itemIndex
  } as const
}

export function removeAllItemsFromCart() {
  return {
    type: REMOVE_ALL_ITEMS_FROM_CART,
    payload: []
  } as const
}

export function setRoomPaymentMethod(payload: RoomPaymentMethod) {
  return {
    type: SET_ROOM_PAYMENT_METHOD,
    payload
  } as const
}

export function setSubscriptionPaymentMethod(payload: SubscriptionPaymentMethod) {
  return {
    type: SET_SUBSCRIPTION_PAYMENT_METHOD,
    payload
  } as const
}

export function toggleIsLoadingPreviousOrders() {
  return {
    type: TOGGLE_IS_LOADING_PREVIOUS_ORDERS,
    payload: {}
  } as const
}

export function toggleIsLoadingAvailableRooms() {
  return {
    type: TOGGLE_IS_LOADING_AVAILABLE_ROOMS,
    payload: {}
  } as const
}

export function toggleTermsDialog() {
  return {
    type: TOGGLE_TERMS_DIALOG,
    payload: {}
  } as const
}

export type DashboardActions = ReturnType<
  typeof reset
  | typeof setPreviousOrders
  | typeof setAvailableRooms
  | typeof toggleIsLoading
  | typeof addRoomToCart
  | typeof removeRoomFromCart
  | typeof addSubscriptionToCart
  | typeof removeSubscriptionFromCart
  | typeof removeAllItemsFromCart
  | typeof setRoomPaymentMethod
  | typeof setSubscriptionPaymentMethod
  | typeof toggleIsLoadingPreviousOrders
  | typeof toggleIsLoadingAvailableRooms
  | typeof toggleTermsDialog
>