import React, { useEffect } from 'react'
import useServiceState from '../../helpers/use-service-state'
import useNotification from '../../helpers/use-notification'
import useRequireAuthentication from '../../helpers/use-require-authentication'

import DashboardService from './Service'

import {
  IDashboardProviderProps, IRoom
} from './Interface'

const DashboardProvider: React.FC<IDashboardProviderProps> = ({ children }) => {
  const currentUser = useRequireAuthentication()

  const dashboardServiceState = useServiceState(DashboardService)
  const { emitSuccess, emitError } = useNotification()

  useEffect(() => {
    async function loadData() {
      let error = await DashboardService.loadPreviousOrders()

      if (error) {
        emitError(error)
      }

      error = await DashboardService.loadAvailableRooms()

      if (error) {
        emitError(error)
      }
    }

    if (currentUser) {
      loadData()
    }
  }, [currentUser, emitError])


  async function addRoomToCart(room: IRoom) {
    const error = await DashboardService.addRoomToCart(room)

    if (error) {
      emitError('Não foi possível adicionar quarto à reserva')
    } else {
      emitSuccess('Quarto adicionado com sucesso')
    }
  }

  async function removeRoomFromCart(roomId: string) {
    const error = await DashboardService.removeRoomFromCart(roomId)

    if (error) {
      emitError('Não foi possível remover quarto')
    } else {
      emitSuccess('Quarto removido com sucesso')
    }
  }

  async function clearCartItems() {
    const error = await DashboardService.removeAllItemsFromCart()

    if (error) {
      emitError('Não foi possível items do carrinho')
    } else {
      emitSuccess('Items removidos com sucesso')
    }
  }

  async function submitOrder() {
    const error = await DashboardService.createOrder()

    if (error) {
      emitError('Não foi possível efetuar reserva')
    } else {
      emitSuccess('Reserva efetuada com sucesso')
    }
  }

  return (
    <React.Fragment>
      {
        children({
          state: dashboardServiceState,
          addSubscription: DashboardService.addSusbcriptionToCart.bind(DashboardService),
          removeSubscription: DashboardService.removeSusbcriptionFromCart.bind(DashboardService),
          toggleTermsDialog: DashboardService.toggleTermsDialog.bind(DashboardService),
          addRoomToCart,
          clearCartItems,
          removeRoomFromCart,
          submitOrder,
          setRoomPaymentMethod: DashboardService.setRoomPaymentMethod.bind(DashboardService),
          setSubscriptionsPaymentMethod: DashboardService.setSubscriptionPaymentMethod.bind(DashboardService),
        })
      }
    </React.Fragment>
  )
}

export default DashboardProvider