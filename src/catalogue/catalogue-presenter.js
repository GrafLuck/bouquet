import { render, RenderPosition } from "../framework/render";
import SortingPresenter from "../sorting/sorting-presenter";
import CatalogueCardPresenter from "../catalogue-card/catalogue-card-presenter";
import CatalogueView from "./catalogue-view";
import ButtonShowMorePresenter from "../button-show-more/button-show-more-presenter";

export default class CataloguePresenter {
  #catalogueView = null;
  #sortingPresenter = null;
  #catalogueCardPresenter = null;
  #buttonShowMorePresenter = null;
  #container = null;

  constructor({ container }) {
    this.#catalogueView = new CatalogueView();
    this.#container = container;
  }

  init() {
    render(this.#catalogueView, this.#container, RenderPosition.AFTERBEGIN);
    this.#renderSorting();
    this.#renderCatalogCard();
    this.#renderButtonShowMore();
  }

  #renderSorting() {
    this.#sortingPresenter = new SortingPresenter({ container: this.#catalogueView.sortingContainer });
    this.#sortingPresenter.init();
  }

  #renderCatalogCard() {
    this.#catalogueCardPresenter = new CatalogueCardPresenter({ container: this.#catalogueView.cardListContainer });
    this.#catalogueCardPresenter.init();
  }

  #renderButtonShowMore() {
    this.#buttonShowMorePresenter = new ButtonShowMorePresenter({ container: this.#catalogueView.buttonContainer });
    this.#buttonShowMorePresenter.init();
  }
}
