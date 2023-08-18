import AbstractStatefulView from "../framework/view/abstract-stateful-view";
import { createCatalogueCardTemplate } from "./catalogue-card-template";
import { modals } from "../modals/init-modals.js";

export default class CatalogueCardView extends AbstractStatefulView {
  #handleButtonHeartClick = null;
  #handleCardClick = null;

  constructor({card, handleButtonHeartClick, handleCardClick}) {
    super();
    this._state = {...card };
    this.#handleButtonHeartClick = handleButtonHeartClick;
    this.#handleCardClick = handleCardClick;
    this._restoreHandlers();
  }

  get template() {
    return createCatalogueCardTemplate(this._state);
  }

  get buttonHeartBody() {
    return this.element.querySelector('.button-heart__body');
  }

  _restoreHandlers() {
    this.element.querySelector('.button-heart').addEventListener('click', this.#onButtonHeartClick);
    this.element.addEventListener("click", () => modals.open("popup-data-attr"));
    // this.element.addEventListener('click', this.#onCardClick);
  }

  #onButtonHeartClick = (evt) => {
    evt.preventDefault();
    this.#handleButtonHeartClick();
  };

  #onCardClick = (evt) => {
    evt.preventDefault();
    // this.#handleCardClick();

    document
    .querySelector(".element-which-is-open-popup")
    .addEventListener("click", () => modals.open("popup-data-attr"));
  };
}
