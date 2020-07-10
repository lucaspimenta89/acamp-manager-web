export interface IOrderSummaryViewProps {
  id: string,
  insertedAt: string,
  rooms: {
    name: string,
    description: string
  }[],
  subscriptions: {
    description: string
    subscription_type: string
  }[]
}