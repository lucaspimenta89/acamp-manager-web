export interface IVoucherStoreItemProps {
  name: string
  description: string
  price: number
  subscriptionType: string
  onAddVoucher: () => void
}