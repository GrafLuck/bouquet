import Observable from '../framework/observable.js';

export default class ProductsModel extends Observable {
  #productsApiService = null;
  #products = [];
  #filteringAndSortingProducts = [];
  #currentFilterReason = 'all';
  #currentFilterColor = new Set().add('all');
  #currentSorting = 'increase';

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
      throw new Error('Can\'t delete product from cart');
    }
  }

  filterProducts(filterType, payload) {
    let type;
    let colors;
    if (filterType === 'reason') {
      type = payload;
      colors = this.#currentFilterColor;
    }
    if (filterType === 'color') {
      type = this.#currentFilterReason;
      colors = payload;
    }
    this.#filteringAndSortingProducts = type !== 'all' ? this.products.filter((product) => product.type === type) : this.products;
    this.#filteringAndSortingProducts = !colors.has('all') ? this.#filteringAndSortingProducts.filter((product) => colors.has(product.color)) : this.#filteringAndSortingProducts;
    this.sortProducts(this.#currentSorting);
    this.#currentFilterReason = type;
    this.#currentFilterColor = colors;
  }

  sortProducts(direction = 'increase') {
    if (direction === 'increase') {
      this.#filteringAndSortingProducts.sort((a, b) => a.price - b.price);
      this.#currentSorting = 'increase';
    }
    if (direction === 'descending') {
      this.#filteringAndSortingProducts.sort((a, b) => b.price - a.price);
      this.#currentSorting = 'descending';
    }
  }
}
