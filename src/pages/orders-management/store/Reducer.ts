import { OrdersManagentState, ordersManagentState } from './State'

import {
  LOAD_ORDERS,
  RESET,
  SET_CURRENT_ORDER,
  TOGGLE_IS_LOADING,
  OrdersManagementActions
} from './Actions'

export default function reducer(state: OrdersManagentState, action: OrdersManagementActions): OrdersManagentState {
  switch(action.type) {
    case LOAD_ORDERS:
      return {
        ...state,
        orders: action.payload
      }
    case RESET:
      return ordersManagentState
    case SET_CURRENT_ORDER:
      return {
        ...state,
        currentOrder: action.payload
      }
    case TOGGLE_IS_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading
      }
    default:
      return state
  }
}