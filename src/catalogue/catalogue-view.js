import AbstractView from '../framework/view/abstract-view.js';
import { createCatalogueTemplate } from './catalogue-template.js';

export default class CatalogueView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return createCatalogueTemplate();
  }

  get sortingContainer() {
    return this.element.querySelector('.catalogue__header');
  }

  get cardListContainer() {
    return this.element.querySelector('.catalogue__list');
  }

  get buttonContainer() {
    return this.element.querySelector('.catalogue__btn-wrap');
  }

  get catalogueHeaderContainer() {
    return this.element.querySelector('.catalogue__header');
  }
}
