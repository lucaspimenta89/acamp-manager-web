import { IUserContract } from "../../../contracts/IUserContract";

export const sessionManagerState = {
  user: (null as unknown) as IUserContract,
  isLoadingUser: false  
}

export type SessionManagerState = typeof sessionManagerState