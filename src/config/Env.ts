export default class Env {
  static getEnv() {
    const apiBaseUrl = process.env.NODE_ENV === 'production'
      ? 'api_url'
      : 'http://localhost:4000/api'

    return {
      apiBaseUrl,
      clientType: 'WEB_APP'
    }
  }
}