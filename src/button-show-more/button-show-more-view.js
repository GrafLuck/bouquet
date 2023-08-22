import AbstractView from '../framework/view/abstract-view.js';
import { createButtonShowMoreTemplate } from './button-show-more-template.js';

export default class ButtonShowMoreView extends AbstractView {
  #handleButtonShowMoreClick = null;

  constructor({ handleButtonShowMoreClick }) {
    super();
    this.#handleButtonShowMoreClick = handleButtonShowMoreClick;
    this.element.addEventListener('click', this.#onButtonShowMoreClick);
  }

  get template() {
    return createButtonShowMoreTemplate();
  }

  #onButtonShowMoreClick = (evt) => {
    evt.preventDefault();
    this.#handleButtonShowMoreClick();
  };
}
