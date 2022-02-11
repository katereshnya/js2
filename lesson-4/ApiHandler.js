import { send, sendPromise, sendFetch } from './utils';

export default class ApiHandler {
  constructor(apiUrl) {
    this.apiUrl = apiUrl
  }

  getCatalog() {
    return sendPromise(`${this.apiUrl}/catalog`)
      .then((data) => {
        return JSON.stringify(data)
      })
  }

  getCart() {
    return sendPromise(`${this.apiUrl}/cart`)
      .then((data) => {
        return JSON.stringify(data)
      })
  }

  addToCart() {
    return sendFetch(`${this.apiUrl}/cart`, 'POST', JSON.stringify(data), { "Content-Type": "application/json" });
  }

  removeFromCart() {
    return sendFetch(`${this.apiUrl}/cart/:id`, 'DELETE', JSON.stringify(data), { "Content-Type": "application/json" });
  }

}