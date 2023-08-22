import AbstractView from '../framework/view/abstract-view.js';
import { createCatalogueEmptyTemplate } from './catalogue-empty-template.js';

export default class CatalogueEmptyView extends AbstractView {
  get template() {
    return createCatalogueEmptyTemplate();
  }
}
