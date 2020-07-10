export type HomePageSubscriptionEnum = 'info' | 'rooms' | 'quiosques' | 'subscriptions' | 'terms-of-service'

export const homeInitialState = {
  currentSubsInfoTab: 'info' as HomePageSubscriptionEnum,
}

export type HomePageState = typeof homeInitialState 