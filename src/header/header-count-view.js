import AbstractView from '../framework/view/abstract-view';
import { createHeaderCountTemplate } from './header-count-template';

export default class HeaderCountView extends AbstractView {
  #totalInfo = { count: 0, price: 0 };
  #handleHeaderCountClick = null;

  constructor({ totalInfo, handleHeaderCountClick }) {
    super();
    this.#totalInfo = totalInfo;
    this.#handleHeaderCountClick = handleHeaderCountClick;
    this.element.addEventListener('click', this.#onHeaderCountClick);
  }

  get template() {
    return createHeaderCountTemplate(this.#totalInfo);
  }

  #onHeaderCountClick = (evt) => {
    evt.preventDefault();
    this.#handleHeaderCountClick();
  };
}
