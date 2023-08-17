import { render } from "../framework/render";
import HeaderCountView from "./header-count-view";

export default class HeaderCountPresenter {
  #headerCountView = null;
  #container = null;

  constructor({container}) {
    this.#headerCountView = new HeaderCountView();
    this.#container = container;
  }

  init() {
    render(this.#headerCountView, this.#container);
  }
}
