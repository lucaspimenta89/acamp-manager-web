export type HomePageSubscriptionEnum = 'info' | 'rooms' | 'quiosques' | 'subscriptions'

export const homeInitialState = {
  currentSubsInfoTab: 'info' as HomePageSubscriptionEnum,
}

export type HomePageState = typeof homeInitialState 