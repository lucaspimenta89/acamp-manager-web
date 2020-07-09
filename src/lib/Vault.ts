export default class Vault {

  private static readonly TOKEN_KEY: string = '_auth-token'

  static getToken(): string | null {
    return window.localStorage.getItem(Vault.TOKEN_KEY)   
  }

  static setToken(token: string) {
    window.localStorage.setItem(Vault.TOKEN_KEY, token)
  }

  static clearToken() {
    window.localStorage.removeItem(Vault.TOKEN_KEY)
  }
}