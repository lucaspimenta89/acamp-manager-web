import ServiceBase from '../../lib/ServiceBase'

import {
  setCurrentSubsInfoTab,
  reset,
  HomePageActions
} from './store/Actions'

import reducer from './store/Reducer'
import { HomePageState, homeInitialState, HomePageSubscriptionEnum } from './store/State'


export class HomePageService extends ServiceBase<HomePageState, HomePageActions> {

  constructor() {
    super(homeInitialState)
  }

  reduce(state: HomePageState, action: HomePageActions): HomePageState {
    return reducer(state, action)
  }

  setSubsInfoTab(tab: HomePageSubscriptionEnum) {
    this.dispatch(setCurrentSubsInfoTab(tab))
  }

  reset() {
    this.dispatch(reset())
  }
}

let instance: HomePageService | null = null

export default (() => {
  if (!instance) {
    instance = new HomePageService()
  }
  return instance
})()