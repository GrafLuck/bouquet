import AbstractView from "../framework/view/abstract-view";
import { createCatalogueCardTemplate } from "./catalogue-card-template";

export default class CatalogueCardView extends AbstractView {
  #card = null;
  #handleButtonHeartClick = null;

  constructor({card, handleButtonHeartClick}) {
    super();
    this.#card = card;
    this.#handleButtonHeartClick = handleButtonHeartClick;
    this.element.querySelector('.button-heart').addEventListener('click', this.#onButtonHeartClick);
  }

  get template() {
    return createCatalogueCardTemplate(this.#card);
  }

  get buttonHeartBody() {
    return this.element.querySelector('.button-heart__body');
  }

  #onButtonHeartClick = (evt) => {
    evt.preventDefault();
    this.#handleButtonHeartClick();
  };
}
