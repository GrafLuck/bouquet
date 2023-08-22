import Observable from '../framework/observable.js';
import { Sorting, Filters, FiltersReason, FiltersColor } from '../const.js';

export default class ProductsModel extends Observable {
  #productsApiService = null;
  #products = [];
  #filteringAndSortingProducts = [];
  #currentFilterReason = FiltersReason.ALL.type;
  #currentFilterColor = new Set().add(FiltersColor.ALL.type);
  #currentSorting = Sorting.INCREASE;

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
    this.sortProducts();
  }

  async getProduct(id) {
    try {
      return await this.#productsApiService.product(id);
    } catch (err) {
      throw new Error('Can\'t get product');
    }
  }

  async addProductToCart(id) {
    try {
      return await this.#productsApiService.addProductToCart(id);
    } catch (err) {
      throw new Error('Can\'t add product to cart');
    }
  }

  async deleteProductFromCart(id) {
    try {
      return await this.#productsApiService.deleteProductFromCart(id);
    } catch (err) {
      //  throw new Error('Can\'t delete product from cart');
    }
  }

  filterProducts(filterType, payload) {
    let type;
    let colors;
    if (filterType === Filters.REASON) {
      type = payload;
      colors = this.#currentFilterColor;
    }
    if (filterType === Filters.COLOR) {
      type = this.#currentFilterReason;
      colors = payload;
    }
    this.#filteringAndSortingProducts = type !== FiltersReason.ALL.type ? this.products.filter((product) => product.type === type) : this.products;
    this.#filteringAndSortingProducts = !colors.has(FiltersColor.ALL.type) ? this.#filteringAndSortingProducts.filter((product) => colors.has(product.color)) : this.#filteringAndSortingProducts;
    this.sortProducts(this.#currentSorting);
    this.#currentFilterReason = type;
    this.#currentFilterColor = colors;
  }

  sortProducts(direction = Sorting.INCREASE) {
    if (direction === Sorting.INCREASE) {
      this.#filteringAndSortingProducts.sort((a, b) => a.price - b.price);
      this.#currentSorting = Sorting.INCREASE;
    }
    if (direction === Sorting.DESCENDING) {
      this.#filteringAndSortingProducts.sort((a, b) => b.price - a.price);
      this.#currentSorting = Sorting.DESCENDING;
    }
  }
}
