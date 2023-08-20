import { remove, render } from "../framework/render";
import HeaderCountView from "./header-count-view";

export default class HeaderCountPresenter {
  #headerCountView = null;
  #container = null;
  #cartModel = null;
  #buttonHeartModel = null;
  #popupPresenter = null;

  constructor({ container, cartModel, buttonHeartModel, popupPresenter }) {
    this.#cartModel = cartModel;
    this.#buttonHeartModel = buttonHeartModel;
    this.#container = container;
    this.#popupPresenter = popupPresenter;
    this.#buttonHeartModel.addObserver(this.#rerenderHeaderCountView);
  }

  init() {
    this.#renderHeaderCountView();
  }

  #rerenderHeaderCountView = () => {
    this.#cartModel.init().then(() => {
      this.#removeHeaderCountView();
      this.#renderHeaderCountView();
    });
  }

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
    document.querySelector('main').style = 'display:none;';
    this.#popupPresenter.init();
  };
}
