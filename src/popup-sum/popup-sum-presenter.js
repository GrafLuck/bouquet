import { remove, render } from '../framework/render.js';
import PopupSumView from './popup-sum-view.js';

export default class PopupSumPresenter {
  #container = null;
  #popupSumView = null;
  #cartModel = null;

  constructor({ container, count, price, cartModel }) {
    this.#container = container;
    this.#cartModel = cartModel;
    this.#popupSumView = new PopupSumView({ count: count, price: price });
    this.#cartModel.addObserver(this.#rerenderPopupSum);
  }

  init() {
    render(this.#popupSumView, this.#container);
  }

  #rerenderPopupSum = () => {
    remove(this.#popupSumView);
    this.#popupSumView = new PopupSumView({ count: this.#cartModel.countProducts, price: this.#cartModel.totalPrice });
    render(this.#popupSumView, this.#container);
  };
}
