import { render } from "../framework/render";
import HeaderCountView from "./header-count-view";

export default class HeaderCountPresenter {
  #headerCountView = null;
  #container = null;
  #cartModel = null;

  constructor({container, cartModel}) {
    this.#cartModel = cartModel;
    this.#headerCountView = new HeaderCountView({model: this.#cartModel});
    this.#container = container;
  }

  init() {
    render(this.#headerCountView, this.#container);
  }
}
