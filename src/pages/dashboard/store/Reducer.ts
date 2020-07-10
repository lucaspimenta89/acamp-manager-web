import { DashboardState, dashboardState } from './State'

import {
  ADD_ROOM_TO_CART,
  ADD_SUBSCRIPTION_TO_CART,

  REMOVE_ROOM_FROM_CART,
  REMOVE_SUBSCRIPTION_FROM_CART,

  REMOVE_ALL_ITEMS_FROM_CART,
    
  RESET,
  SET_AVAILABLE_ROOMS,
  SET_PREVIOUS_ORDERS,
  SET_ROOM_PAYMENT_METHOD,
  SET_SUBSCRIPTION_PAYMENT_METHOD,
  TOGGLE_IS_LOADING,
  TOGGLE_IS_LOADING_AVAILABLE_ROOMS,
  TOGGLE_IS_LOADING_PREVIOUS_ORDERS,
  TOGGLE_TERMS_DIALOG,
  DashboardActions
} from './Actions'

export default function reducer(state: DashboardState, action: DashboardActions): DashboardState {
  switch (action.type) {
    case ADD_ROOM_TO_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          room: action.payload
        }
      }
    case REMOVE_ROOM_FROM_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          room: null
        }
      }
    case ADD_SUBSCRIPTION_TO_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          subscriptions: [...state.cart.subscriptions, action.payload]
        }
      }
    case REMOVE_SUBSCRIPTION_FROM_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          subscriptions: state.cart.subscriptions.filter((_it, index) => index !== action.payload)
        }
      }
    case REMOVE_ALL_ITEMS_FROM_CART:
      return {
        ...state,
        cart: dashboardState.cart
      }
    case RESET:
      return dashboardState
    case SET_AVAILABLE_ROOMS:
      return {
        ...state,
        availableRooms: action.payload
      }
    case SET_PREVIOUS_ORDERS:
      return {
        ...state,
        previousOrders: action.payload
      }
    case SET_ROOM_PAYMENT_METHOD:
      return {
        ...state,
        cart: {
          ...state.cart,
          paymentMethod: {
            ...state.cart.paymentMethod,
            roomPaymentMethod: action.payload
          }
        }
      }
    case SET_SUBSCRIPTION_PAYMENT_METHOD:
      return {
        ...state,
        cart: {
          ...state.cart,
          paymentMethod: {
            ...state.cart.paymentMethod,
            subscriptionPaymentMethod: action.payload
          }
        }
      }
    case TOGGLE_IS_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading
      }
    case TOGGLE_IS_LOADING_AVAILABLE_ROOMS:
      return {
        ...state,
        isLoadingAvailableRooms: !state.isLoadingAvailableRooms
      }
    case TOGGLE_IS_LOADING_PREVIOUS_ORDERS:
      return {
        ...state,
        isLoadingPreviousOrders: !state.isLoadingPreviousOrders
      }
    case TOGGLE_TERMS_DIALOG:
      return {
        ...state,
        isTermsDialogOpen: !state.isTermsDialogOpen
      }
    default:
      return state
  }
}