export default class Env {
  static getEnv() {
    // const apiBaseUrl = process.env.NODE_ENV === 'production'
    //   ? 'https://acamp-manager-api.herokuapp.com/api'
    //   : 'http://localhost:4000/api'

    const apiBaseUrl = 'https://acamp-manager-api.herokuapp.com/api'

    return {
      apiBaseUrl,
      clientType: 'WEB_APP'
    }
  }
}