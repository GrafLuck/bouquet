import AbstractView from '../framework/view/abstract-view';
import { createHeaderCountTemplate } from './header-count-template';

export default class HeaderCountView extends AbstractView{
  #model = null;

  constructor({model}) {
    super();
    this.#model = model;
  }

  get template() {
    return createHeaderCountTemplate({count: this.#model.countProducts, price: this.#model.totalPrice});
  }
}
