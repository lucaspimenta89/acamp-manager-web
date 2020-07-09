import { 
  HomePageState,
  HomePageSubscriptionEnum
} from './store/State'

export interface IHomePageProps {
  state: HomePageState
  onSetSubsInfoTab: (tab: HomePageSubscriptionEnum) => void
}

export interface IHomePageProviderProps {
  children: (props: IHomePageProps) => React.ReactElement
}