import Observable from '../framework/observable.js';

export default class CartModel extends Observable {
  #cartApiService = null;
  #cart = [];

  constructor({cartApiService}) {
    super();
    this.#cartApiService = cartApiService;
  }

  get cart() {
    return this.#cart;
  }

  async init() {
    this.#cart = await this.#cartApiService.cart;
    return this.#cart;
  }
}
