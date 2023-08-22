import FiltersView from './filters-view.js';
import { render, RenderPosition } from '../framework/render.js';
import { Filters, FiltersReason } from '../const.js';

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

  filterProducts(filter, itemFilter) {
    if (filter === Filters.REASON) {
      const type = this.#adaptFilterToType(itemFilter);
      this.#productsModel.filterProducts(Filters.REASON, type);
      this.#buttonShowMoreModel.page = 1;
    }
    if (filter === Filters.COLOR) {
      itemFilter = this.#adaptFilterToColor(itemFilter);
      this.#productsModel.filterProducts(Filters.COLOR, itemFilter);
      this.#buttonShowMoreModel.page = 1;
    }
  }

  rerenderFilters() {
    this.#filtersView.rerenderFilters();
  }

  #handleFilterReasonChange = (itemFilter) => {
    this.filterProducts(Filters.REASON, itemFilter);
  };

  #handleFilterColorChange = (colors) => {
    this.filterProducts(Filters.COLOR, colors);
  };

  #adaptFilterToType(itemFilter) {
    let type;
    switch (itemFilter.split('-')[1]) {
      case FiltersReason.BIRTHDAY.type:
        type = 'birthdayboy';
        break;
      case FiltersReason.BRIDE.type:
        type = 'bridge';
        break;
      case FiltersReason.MOTHER.type:
        type = 'motherday';
        break;
      case FiltersReason.COLLEAGUE.type:
        type = 'colleagues';
        break;
      case FiltersReason.DARLING.type:
        type = 'forlove';
        break;
      default:
        type = 'all';
    }
    return type;
  }

  #adaptFilterToColor(itemFilter) {
    if (itemFilter.delete('lilac')) {
      itemFilter.add('violet');
    }
    return itemFilter;
  }
}
