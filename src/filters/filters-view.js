import AbstractView from "../framework/view/abstract-view";
import { createFiltersTemplate } from './filters-template.js';

export default class FiltersView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return createFiltersTemplate();
  }
}
