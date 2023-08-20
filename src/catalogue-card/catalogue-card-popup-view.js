import AbstractStatefulView from "../framework/view/abstract-stateful-view";
import { createCardPopupTemplate } from "./catalogue-card-popup-template";

export default class CatalogueCardPopupView extends AbstractStatefulView {
  #handleButtonCloseClick = null;

  constructor({ card, handleButtonCloseClick }) {
    super();
    this._state = { ...card };
    this._restoreHandlers();
    this.#handleButtonCloseClick = handleButtonCloseClick;
  }

  get template() {
    return createCardPopupTemplate(this._state);
  }

  _restoreHandlers() {
    this.element.querySelector('.btn-close').addEventListener('click', this.#onButtonCloseClick);
  }

  #onButtonCloseClick = (evt) => {
    evt.preventDefault();
    this.#handleButtonCloseClick();
  }

}
