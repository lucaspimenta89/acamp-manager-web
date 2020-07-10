import {  IRoom, IOrder, IPaymentMenthod, ISubscriptionOrderItem } from '../Interface'

export const dashboardState = {
  isLoadingPreviousOrders: false,
  previousOrders: [] as IOrder[],
  cart: {
    room: null as IRoom | null,
    subscriptions: [] as ISubscriptionOrderItem[],
    paymentMethod: {
      roomPaymentMethod: 'none',
      subscriptionPaymentMethod: 'none'
    } as IPaymentMenthod
  },
  isLoading: false,
  isLoadingAvailableRooms: false,
  availableRooms: [] as IRoom[],
  isTermsDialogOpen: false
}

export type DashboardState = typeof dashboardState