import ButtonShowMoreView from "./button-show-more-view";
import { render } from "../framework/render";

export default class ButtonShowMorePresenter {
  #buttonShowMoreView = null;
  #container = null;

  constructor({ container }) {
    this.#buttonShowMoreView = new ButtonShowMoreView();
    this.#container = container;
  }

  init() {
    render(this.#buttonShowMoreView, this.#container);
  }
}
