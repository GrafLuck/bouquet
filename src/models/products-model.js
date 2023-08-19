import Observable from '../framework/observable.js';

export default class ProductsModel extends Observable {
  #productsApiService = null;
  #products = [];
  #filteringAndSortingProducts = [];

  constructor({ productsApiService }) {
    super();
    this.#productsApiService = productsApiService;
  }

  get products() {
    return this.#products;
  }

  get filteringAndSortingProducts() {
    return this.#filteringAndSortingProducts;
  }

  set filteringAndSortingProducts(products) {
    this.#filteringAndSortingProducts = products;
    this._notify('FILTER_CHANGE', this.filteringAndSortingProducts);
  }

  async init() {
    this.#products = await this.#productsApiService.products;
    this.#filteringAndSortingProducts = Array.from(structuredClone({ ...this.#products, length: this.#products.length }));
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
