import { render } from "../framework/render";
import SortingView from "./sorting-view";

export default class SortingPresenter {
  #sortingView = null;
  #container = null;
  #productsModel = null;
  #buttonShowMoreModel = null;

  constructor({ container, productsModel, buttonShowMoreModel }) {
    this.#sortingView = new SortingView(this.#handleIncreaseSortingButtonClick, this.#handleDescendingSortingButtonClick);
    this.#container = container;
    this.#productsModel = productsModel;
    this.#buttonShowMoreModel = buttonShowMoreModel;
  }

  init() {
    render(this.#sortingView, this.#container);
  }

  #handleIncreaseSortingButtonClick = () => {
    this.#productsModel.sortProducts();
    this.#buttonShowMoreModel.page = 1;
  };

  #handleDescendingSortingButtonClick = () => {
    this.#productsModel.sortProducts('descending');
    this.#buttonShowMoreModel.page = 1;
  };
}
