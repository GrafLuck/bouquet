import Observable from '../framework/observable.js';

export default class ProductsModel extends Observable {
  #productsApiService = null;
  #products = [];

  constructor({productsApiService}) {
    super();
    this.#productsApiService = productsApiService;
  }

  get products() {
    return this.#products;
  }

  async init() {
    this.#products = await this.#productsApiService.products;
    return this.#products;
  }

  async getProduct(id) {
    try {
      return await this.#productsApiService.product(id);
    } catch (err) {

    }
  }

  async addProductToCart(id) {
    try {
      return await this.#productsApiService.addProductToCart(id);
    } catch (err) {

    }
  }

  async deleteProductFromCart(id) {
    try {
      return await this.#productsApiService.deleteProductFromCart(id);
    } catch (err) {

    }
  }
}
