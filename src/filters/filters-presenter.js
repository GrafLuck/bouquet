import { render, RenderPosition } from "../framework/render";
import FiltersView from "./filters-view";

export default class FiltersPresenter {
  #filtersView = null;
  #productsModel = null;
  #buttonShowMoreModel = null;
  #container = null;

  constructor({ container, productsModel, buttonShowMoreModel }) {
    this.#filtersView = new FiltersView({
      handleFilterReasonChange: this.#handleFilterReasonChange,
      handleFilterColorChange: this.#handleFilterColorChange
    });
    this.#container = container;
    this.#productsModel = productsModel;
    this.#buttonShowMoreModel = buttonShowMoreModel;
  }

  init() {
    render(this.#filtersView, this.#container, RenderPosition.AFTERBEGIN);
  }

  #handleFilterReasonChange = (itemFilter) => {
    const filteringProducts = [];
    this.#buttonShowMoreModel.page = 1;
    const type = this.adaptFilterToType(itemFilter);
    if (type === 'all') {
      this.#productsModel.filteringAndSortingProducts = this.#productsModel.products;
      return;
    }
    for (const product of this.#productsModel.products) {
      if (product.type === type) {
        filteringProducts.push(product);
      }
    }
    this.#productsModel.filteringAndSortingProducts = filteringProducts;
  };

  #handleFilterColorChange = (colors) => {
    const filteringProducts = [];
    this.#buttonShowMoreModel.page = 1;

    if (colors.has('all')) {
      this.#productsModel.filteringAndSortingProducts = this.#productsModel.products;
      return;
    }
    for (const product of this.#productsModel.products) {
      if (colors.has(product.color)) {
        filteringProducts.push(product);
      }
    }
    this.#productsModel.filteringAndSortingProducts = filteringProducts;
  };

  adaptFilterToType(itemFilter) {
    let type;
    switch (itemFilter.split('-')[1]) {
      case 'birthday':
        type = 'birthdayboy';
        break;
      case 'bride':
        type = 'bridge';
        break;
      case 'mother':
        type = 'motherday';
        break;
      case 'colleague':
        type = 'colleagues';
        break;
      case 'darling':
        type = 'forlove';
        break;
      default:
        type = 'all';
    }
    return type;
  }
}
