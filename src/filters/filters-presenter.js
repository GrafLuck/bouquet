import { render, RenderPosition } from "../framework/render";
import FiltersView from "./filters-view";

export default class FiltersPresenter {
  #filtersView = null;
  #container = null;

  constructor({ container }) {
    this.#filtersView = new FiltersView();
    this.#container = container;
  }

  init() {
    render(this.#filtersView, this.#container, RenderPosition.AFTERBEGIN);
  }
}
