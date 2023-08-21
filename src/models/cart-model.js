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
    return Object.hasOwn(this.#cart, 'productCount') ? this.#cart.productCount : 0;
  }

  get totalPrice() {
    return Object.hasOwn(this.#cart, 'sum') ? this.#cart.sum : 0;
  }

  async init() {
    this.#cart = await this.#cartApiService.cart;
    this._notify('UPDATE_CART', this.#cart);
  }
}
