import AbstractView from "../framework/view/abstract-view";
import { createFiltersTemplate } from './filters-template.js';

export default class FiltersView extends AbstractView {
  #handleFilterReasonChange = null;
  #handleFilterColorChange = null;

  constructor({ handleFilterReasonChange, handleFilterColorChange }) {
    super();
    this.element.querySelector('.filter-reason').addEventListener('change', this.#onFilterReasonChange);
    this.element.querySelector('.filter-color').addEventListener('change', this.#onFilterColorChange);
    this.#handleFilterReasonChange = handleFilterReasonChange;
    this.#handleFilterColorChange = handleFilterColorChange;
  }

  get template() {
    return createFiltersTemplate();
  }

  get filterReason() {
    return this.element.querySelector('.filter-reason');
  }

  get filterColor() {
    return this.element.querySelector('.filter-color');
  }

  #onFilterReasonChange = (evt) => {
    console.log(evt.target);
    this.#handleFilterReasonChange(evt.target.value);
  };

  #onFilterColorChange = (evt) => {
    console.log(evt.target);
    this.#handleFilterColorChange(evt.target.value);
  };
}
