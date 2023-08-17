import { render } from "../framework/render";
import SortingView from "./sorting-view";

export default class SortingPresenter {
  #sortingView = null;
  #container = null;

  constructor({ container }) {
    this.#sortingView = new SortingView();
    this.#container = container;
  }

  init() {
    render(this.#sortingView, this.#container);
  }
}
