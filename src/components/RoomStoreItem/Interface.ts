export interface IRoomStoreItemProps {
  id: string,
  name: string,
  price: number,
  description: string,
  type: string,
  onAddToCart: () => void,
  disabled: boolean
}