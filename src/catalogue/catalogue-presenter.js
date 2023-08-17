import { render, RenderPosition } from "../framework/render";
import SortingPresenter from "../sorting/sorting-presenter";
import CatalogueView from "./catalogue-view";

export default class CataloguePresenter {
  #catalogueView = null;
  #sortingPresenter = null;
  #container = null;

  constructor({ container }) {
    this.#catalogueView = new CatalogueView();
    this.#container = container;
  }

  init() {
    render(this.#catalogueView, this.#container, RenderPosition.AFTERBEGIN);
    this.#renderSorting();
  }

  #renderSorting() {
    this.#sortingPresenter = new SortingPresenter({ container: this.#catalogueView.sortingContainer });
    this.#sortingPresenter.init();
  }
}
