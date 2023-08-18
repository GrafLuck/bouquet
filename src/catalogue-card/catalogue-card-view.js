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

  #onButtonHeartClick = (evt) => {
    evt.preventDefault();
    this.#handleButtonHeartClick();
  };
}
