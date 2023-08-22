import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import { createPopupTemplate } from './popup-template.js';

export default class PopupView extends AbstractStatefulView {
  #handleButtonClosePopupClick = null;
  #handleButtonReturnToCatalogClick = null;

  constructor({ card, handleButtonClosePopupClick, handleButtonReturnToCatalogClick }) {
    super();
    this._state = { ...card, isLoading: false };
    this.#handleButtonClosePopupClick = handleButtonClosePopupClick;
    this.#handleButtonReturnToCatalogClick = handleButtonReturnToCatalogClick;
    this._restoreHandlers();
  }

  get template() {
    return createPopupTemplate(this._state);
  }

  get productsContainer() {
    return this.element.querySelector('.popup-deferred__catalog');
  }

  get popupSumContainer() {
    return this.element.querySelector('.popup-deferred__sum');
  }

  get ButtonCleanContainer() {
    return this.element.querySelector('.popup-deferred__btn-container');
  }

  displayMainPage() {
    document.querySelector('main').style = 'display:block;';
  }

  _restoreHandlers() {
    this.element.querySelector('.hero__popupclose').addEventListener('click', this.#onButtonClosePopupClick);
    this.element.querySelector('.popup-deferred__btn').addEventListener('click', this.#onButtonReturnToCatalogClick);
  }

  #onButtonClosePopupClick = (evt) => {
    evt.preventDefault();
    this.updateElement({ isLoading: true });
    this.#handleButtonClosePopupClick();
  };

  #onButtonReturnToCatalogClick = (evt) => {
    evt.preventDefault();
    this.#handleButtonReturnToCatalogClick();
  };
}
