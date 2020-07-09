import React from 'react'
import { IHomePageProviderProps } from './Interfaces'
import HomePageService from './Service'
import useServiceState from '../../helpers/use-service-state'

import {
  HomePageSubscriptionEnum
} from './store/State'

const HomePageProvider: React.FC<IHomePageProviderProps> = ({
  children
}) => {
  const serviceState = useServiceState(HomePageService)

  return (
    <React.Fragment>
      {
        children({
          state: serviceState,
          onSetSubsInfoTab: (tab: HomePageSubscriptionEnum) =>  HomePageService.setSubsInfoTab(tab)
        })
      }
    </React.Fragment>
  )  
}

export default HomePageProvider