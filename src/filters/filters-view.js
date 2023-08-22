import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import { createFiltersTemplate } from './filters-template.js';

export default class FiltersView extends AbstractStatefulView {
  #handleFilterReasonChange = null;
  #handleFilterColorChange = null;

  constructor({ handleFilterReasonChange, handleFilterColorChange }) {
    super();
    this.#handleFilterReasonChange = handleFilterReasonChange;
    this.#handleFilterColorChange = handleFilterColorChange;
    this._restoreHandlers();
  }

  get template() {
    return createFiltersTemplate();
  }

  rerenderFilters() {
    this.updateElement({});
  }

  _restoreHandlers() {
    this.element.querySelector('.filter-reason').addEventListener('change', this.#onFilterReasonChange);
    this.element.querySelector('.filter-color').addEventListener('change', this.#onFilterColorChange);
  }

  #onFilterReasonChange = (evt) => {
    evt.preventDefault();
    this.#handleFilterReasonChange(evt.target.value);
  };

  #onFilterColorChange = (evt) => {
    evt.preventDefault();
    const colors = new Set();
    const colorCheckboxesChecked = this.element.querySelectorAll('.filter-color__form-field:checked');
    for (const colorCheckboxChecked of colorCheckboxesChecked) {
      colors.add(colorCheckboxChecked.dataset.filterColor.split('-')[1]);
    }
    this.#handleFilterColorChange(colors);
  };
}
