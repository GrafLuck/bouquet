import AbstractView from "../framework/view/abstract-view";
import { createButtonShowMoreTemplate } from "./button-show-more-template";

export default class ButtonShowMoreView extends AbstractView {
  #handleButtonShowMoreClick = null;

  constructor({handleButtonShowMoreClick}) {
    super();
    this.element.addEventListener('click', this.#onButtonShowMoreClick);
    this.#handleButtonShowMoreClick = handleButtonShowMoreClick;
  }

  get template() {
    return createButtonShowMoreTemplate();
  }

  #onButtonShowMoreClick = (evt) => {
    evt.preventDefault();
    this.#handleButtonShowMoreClick();
  };
}
