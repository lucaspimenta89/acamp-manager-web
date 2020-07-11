import React, { useEffect } from 'react'
import useServiceState from '../../helpers/use-service-state'
import useNotification from '../../helpers/use-notification'
import useRequireAuthentication from '../../helpers/use-require-authentication'

import OrdersManagementService from './Service'

import {
  IOrdersManagementProviderProps, IPaymentPayload
} from './Interfaces'

const OrdersManagementProvider: React.FC<IOrdersManagementProviderProps> = ({ children }) => {
  const currentUser = useRequireAuthentication()
  const serviceState = useServiceState(OrdersManagementService)
  const { emitSuccess, emitError } = useNotification()

  useEffect(() => {
    async function loadData() {
      const error = await OrdersManagementService.loadAllOrders()

      if (error) {
        emitError(error)
      }
    }

    if (currentUser) {
      loadData()
    }
  }, [currentUser, emitError])

  async function registerPayment(data: Partial<IPaymentPayload>): Promise<boolean> {
    const error = await OrdersManagementService.registerPayment(data)

    if (error) {
      emitError(error)
      return false
    }

    emitSuccess('Pagamento recebido com sucesso.')
    return true
  } 

  return (
    <React.Fragment>
      {
        children({
          state: serviceState,
          setCurrentOrder: OrdersManagementService.setCurrentOrder.bind(OrdersManagementService),
          validatePayment: OrdersManagementService.validatePayment.bind(OrdersManagementService),
          registerPayment
        })
      }
    </React.Fragment>
  )

}

export default OrdersManagementProvider