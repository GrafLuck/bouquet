import { remove, render } from '../framework/render.js';
import HeaderCountView from './header-count-view.js';

export default class HeaderCountPresenter {
  #headerCountView = null;
  #container = null;
  #cartModel = null;
  #popupPresenter = null;

  constructor({ container, cartModel, popupPresenter }) {
    this.#cartModel = cartModel;
    this.#container = container;
    this.#popupPresenter = popupPresenter;
  }

  init() {
    this.#renderHeaderCountView();
    this.#cartModel.addObserver(this.#rerenderHeaderCountView);
  }

  #rerenderHeaderCountView = () => {
    this.#removeHeaderCountView();
    this.#renderHeaderCountView();
  };

  #renderHeaderCountView() {
    this.#headerCountView = new HeaderCountView({
      totalInfo: {
        count: this.#cartModel.countProducts,
        price: this.#cartModel.totalPrice,
      },
      handleHeaderCountClick: this.#handleHeaderCountClick
    });
    render(this.#headerCountView, this.#container);
  }

  #removeHeaderCountView() {
    remove(this.#headerCountView);
  }

  #handleHeaderCountClick = () => {
    this.#headerCountView.hideMainPage();
    this.#popupPresenter.init();
  };
}
