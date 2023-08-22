import AbstractView from '../framework/view/abstract-view.js';
import { createPopupSumTemplate } from './popup-sum-template.js';

export default class PopupSumView extends AbstractView {
  #count = null;
  #price = null;

  constructor({ count, price }) {
    super();
    this.#count = count;
    this.#price = price;
  }

  get template() {
    return createPopupSumTemplate(this.#count, this.#price);
  }
}
