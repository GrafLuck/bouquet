import { remove, render } from "../framework/render";
import HeaderCountView from "./header-count-view";

export default class HeaderCountPresenter {
  #headerCountView = null;
  #container = null;
  #cartModel = null;
  #buttonHeartModel = null;

  constructor({container, cartModel, buttonHeartModel}) {
    this.#cartModel = cartModel;
    this.#buttonHeartModel = buttonHeartModel;
    this.#container = container;
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
    this.#headerCountView = new HeaderCountView({count: this.#cartModel.countProducts, price: this.#cartModel.totalPrice});
    render(this.#headerCountView, this.#container);
  }

  #removeHeaderCountView() {
    remove(this.#headerCountView);
  }
}
