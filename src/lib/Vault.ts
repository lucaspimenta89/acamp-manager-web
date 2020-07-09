export default class Vault {

  private static readonly TOKEN_KEY: string = '_auth-token'

  static getToken(): string | null {
    return window.sessionStorage.getItem(Vault.TOKEN_KEY)   
  }

  static setToken(token: string) {
    window.sessionStorage.setItem(Vault.TOKEN_KEY, token)
  }

  static clearToken() {
    window.sessionStorage.removeItem(Vault.TOKEN_KEY)
  }
}