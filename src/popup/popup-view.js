import AbstractView from "../framework/view/abstract-view";
import { createPopupTemplate } from "./popup-template";

export default class PopupView extends AbstractView {
  #card = null;
  #handleButtonCleanPopupClick = null;

  constructor({ card, handleButtonCleanPopupClick }) {
    super();
    this.#card = card;
    this.#handleButtonCleanPopupClick = handleButtonCleanPopupClick;
    this.element.querySelector('.popup-deferred__btn-clean').addEventListener('click', this.#onButtonCleanPopupClick);
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
}
