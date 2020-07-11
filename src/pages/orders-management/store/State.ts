import { IGroupedOrders } from "../Interfaces"

export const ordersManagentState = {
  orders: [] as IGroupedOrders[],
  isLoading: false,
  currentOrder: null as IGroupedOrders | null
}

export type OrdersManagentState = typeof ordersManagentState