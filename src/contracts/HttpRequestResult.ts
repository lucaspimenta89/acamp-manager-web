import IApiResult from "./IApiResult"
export type HttpRequestResult<T> = [IApiResult<T> | null, number, string | null]

