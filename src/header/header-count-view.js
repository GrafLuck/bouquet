import AbstractView from '../framework/view/abstract-view';
import { createHeaderCountTemplate } from './header-count-template';

export default class HeaderCountView extends AbstractView{
  #totalInfo = {count: 0, price: 0};

  constructor(totalInfo) {
    super();
    this.#totalInfo = totalInfo;
  }

  get template() {
    return createHeaderCountTemplate(this.#totalInfo);
  }
}
