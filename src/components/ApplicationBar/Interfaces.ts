import { IUserContract } from "../../contracts/IUserContract";

export interface IApplicationBarProps {
  user?: IUserContract
  onSignOut?: () => Promise<void>
}