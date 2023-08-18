import AbstractStatefulView from "../framework/view/abstract-stateful-view";
import { createCatalogueCardTemplate } from "./catalogue-card-template";

export default class CatalogueCardView extends AbstractStatefulView {
  #card = null;
  #handleButtonHeartClick = null;

  constructor({card, handleButtonHeartClick}) {
    super();
    this._state = {...card, isActive: false};
    this.#card = card;
    this.#handleButtonHeartClick = handleButtonHeartClick;
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
  }

  #onButtonHeartClick = (evt) => {
    evt.preventDefault();
    this.#handleButtonHeartClick();
  };
}
