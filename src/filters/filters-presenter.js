import { render, RenderPosition } from '../framework/render.js';
import FiltersView from './filters-view.js';

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
    this.filterProducts('reason', itemFilter);
  };

  #handleFilterColorChange = (colors) => {
    this.filterProducts('color', colors);
  };

  filterProducts(filter, itemFilter) {
    if (filter === 'reason') {
      const type = this.#adaptFilterToType(itemFilter);
      this.#productsModel.filterProducts('reason', type);
      this.#buttonShowMoreModel.page = 1;
    }
    if (filter === 'color') {
      itemFilter = this.#adaptFilterToColor(itemFilter);
      this.#productsModel.filterProducts('color', itemFilter);
      this.#buttonShowMoreModel.page = 1;
    }
  }

  #adaptFilterToType(itemFilter) {
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

  #adaptFilterToColor(itemFilter) {
    if (itemFilter.delete('lilac')) {
      itemFilter.add('violet');
    }
    return itemFilter;
  }

  rerenderFilters() {
    this.#filtersView.rerenderFilters();
  }
}
