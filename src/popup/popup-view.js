import AbstractView from "../framework/view/abstract-view";
import { createPopupTemplate } from "./popup-template";

export default class PopupView extends AbstractView {
  #card = null;
  #handleButtonCleanPopupClick = null;
  #handleButtonClosePopupClick = null;
  #handleButtonReturnToCatalogClick = null;

  constructor({ card, handleButtonCleanPopupClick, handleButtonClosePopupClick, handleButtonReturnToCatalogClick }) {
    super();
    this.#card = card;
    this.#handleButtonCleanPopupClick = handleButtonCleanPopupClick;
    this.#handleButtonClosePopupClick = handleButtonClosePopupClick;
    this.#handleButtonReturnToCatalogClick = handleButtonReturnToCatalogClick;
    this.element.querySelector('.popup-deferred__btn-clean').addEventListener('click', this.#onButtonCleanPopupClick);
    this.element.querySelector('.hero__popupclose').addEventListener('click', this.#onButtonClosePopupClick);
    this.element.querySelector('.popup-deferred__btn').addEventListener('click', this.#onButtonReturnToCatalogClick);
  }

  get template() {
    return createPopupTemplate(this.#card);
  }

  get productsContainer() {
    return this.element.querySelector('.popup-deferred__catalog');
  }

  get popupSumContainer() {
    return this.element.querySelector('.popup-deferred__sum');
  }

  #onButtonCleanPopupClick = (evt) => {
    evt.preventDefault();
    this.#handleButtonCleanPopupClick();
  };

  #onButtonClosePopupClick = (evt) => {
    evt.preventDefault();
    this.#handleButtonClosePopupClick();
  };

  #onButtonReturnToCatalogClick = (evt) => {
    evt.preventDefault();
    this.#handleButtonReturnToCatalogClick();
  };
}
