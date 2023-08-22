import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import { createCatalogueCardModalTemplate } from './catalogue-card-modal-template.js';

export default class CatalogueCardModalView extends AbstractStatefulView {
  #handleButtonAddToCartClick = null;

  constructor({ card, handleButtonAddToCartClick }) {
    super();
    this._state = { ...card };
    this.#handleButtonAddToCartClick = handleButtonAddToCartClick;
    this._restoreHandlers();
  }

  get template() {
    return createCatalogueCardModalTemplate(this._state);
  }

  get popupButton() {
    return this.element.querySelector('.product-description__button');
  }

  _restoreHandlers() {
    this.element.querySelector('.product-description__button').addEventListener('click', this.#onButtonAddToCartClick);
  }

  #onButtonAddToCartClick = (evt) => {
    evt.preventDefault();
    this.#handleButtonAddToCartClick();
  };
}
