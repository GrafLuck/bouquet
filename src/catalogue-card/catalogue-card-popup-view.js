import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import { createCardPopupTemplate } from './catalogue-card-popup-template.js';

export default class CatalogueCardPopupView extends AbstractStatefulView {
  #handleButtonCloseClick = null;
  #handleButtonMinusClick = null;
  #handleButtonPlusClick = null;

  constructor({ card, handleButtonCloseClick, handleButtonMinusClick, handleButtonPlusClick }) {
    super();
    this._state = { ...card };
    this.#handleButtonCloseClick = handleButtonCloseClick;
    this.#handleButtonMinusClick = handleButtonMinusClick;
    this.#handleButtonPlusClick = handleButtonPlusClick;
    this._restoreHandlers();
  }

  get template() {
    return createCardPopupTemplate(this._state);
  }

  _restoreHandlers() {
    this.element.querySelector('.btn-close').addEventListener('click', this.#onButtonCloseClick);
    this.element.querySelector('#btn-calculate-minus').addEventListener('click', this.#onButtonMinusClick);
    this.element.querySelector('#btn-calculate-plus').addEventListener('click', this.#onButtonPlusClick);
  }

  #onButtonCloseClick = (evt) => {
    evt.preventDefault();
    this.updateElement({ isLoading: true });
    this.#handleButtonCloseClick();
  };

  #onButtonMinusClick = (evt) => {
    evt.preventDefault();
    this.#handleButtonMinusClick();
    const count = (this._state.count - 1) > 0 ? this._state.count - 1 : 0;
    this.updateElement({ count: count });
  };

  #onButtonPlusClick = (evt) => {
    evt.preventDefault();
    this.#handleButtonPlusClick();
    this.updateElement({ count: this._state.count + 1 });
  };
}
