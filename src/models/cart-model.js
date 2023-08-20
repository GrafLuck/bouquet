import Observable from '../framework/observable.js';

export default class CartModel extends Observable {
  #cartApiService = null;
  #cart = null;

  constructor({ cartApiService }) {
    super();
    this.#cartApiService = cartApiService;
  }

  get cart() {
    return this.#cart;
  }

  get countProducts() {
    return this.#cart === null ? 0 : this.#cart.productCount;
  }

  get totalPrice() {
    return this.#cart === null ? 0 : this.#cart.sum;
  }

  async init() {
    this.#cart = await this.#cartApiService.cart;
    this._notify('UPDATE_CART', this.#cart);
  }
}
