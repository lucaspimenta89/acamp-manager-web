import axios, { Method } from 'axios'
import Vault from './Vault'
import Env from '../config/Env'
import { get } from 'lodash'
import { navigate } from '@reach/router'
import { HttpRequestResult } from '../contracts/HttpRequestResult'
import IApiResult from '../contracts/IApiResult'

export interface IRequestOptions {
  unauthorizedErrorExpected: boolean
}

async function executeAxiosRequest<T>(
  url: string,
  method: Method,
  data: any = null,
  options?: IRequestOptions
): Promise<HttpRequestResult<T>> {  
  const { apiBaseUrl, clientType } = Env.getEnv()
  const headers: { [key: string]: string } = {
    'X-Client-Type': clientType
  }

  const token = Vault.getToken()

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  try {
    const response = await axios({
      baseURL: apiBaseUrl,
      url,
      method,
      headers,
      data
    })

    return [response.data as IApiResult<T>, response.status, null]
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401 && (!options || !options.unauthorizedErrorExpected)) {
        Vault.clearToken()
        navigate('/sign-in')
      }

      const errorMessage = [404, 500].includes(error.response.status)
        ? error.message
        : get(error, 'response.data') || error.message

      return [null, error.response.status, errorMessage]
    }

    return [null, 0, error.message]
  }
}

export default class Http {
  static async get<T>(url: string, options?: IRequestOptions): Promise<HttpRequestResult<T>> {
    return executeAxiosRequest<T>(url, 'GET', null, options)
  }

  static async post<TData, TResult>(
    url: string,
    data: TData,
    options?: IRequestOptions
  ): Promise<HttpRequestResult<TResult>> {
    return executeAxiosRequest<TResult>(url, 'POST', data, options)
  }

  static async put<TData, TResult>(
    url: string,
    data: TData,
    options?: IRequestOptions
  ): Promise<HttpRequestResult<TResult>> {
    return executeAxiosRequest<TResult>(url, 'PUT', data, options)
  }

  static async $delete<T>(url: string, options?: IRequestOptions): Promise<HttpRequestResult<T>> {
    return executeAxiosRequest<T>(url, 'DELETE', null, options)
  }
}