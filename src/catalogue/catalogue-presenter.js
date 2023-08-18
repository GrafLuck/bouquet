import { remove, render, RenderPosition } from "../framework/render";
import SortingPresenter from "../sorting/sorting-presenter";
import CatalogueCardPresenter from "../catalogue-card/catalogue-card-presenter";
import CatalogueView from "./catalogue-view";
import ButtonShowMorePresenter from "../button-show-more/button-show-more-presenter";
import ButtonToTopPresenter from "../button-to-top/button-to-top-presenter";
import { COUNT_DISPLAY_PRODUCTS } from "../const";
import ButtonShowMoreModel from "../models/button-show-more-model";

export default class CataloguePresenter {
  #catalogueView = null;
  #sortingPresenter = null;
  #catalogueCardPresenter = null;
  #buttonShowMorePresenter = null;
  #buttonToTopPresenter = null;
  #productsModel = null;
  #buttonShowMoreModel = null;
  #container = null;
  #catalogCardPresenters = new Map();

  constructor({ container, productsModel }) {
    this.#productsModel = productsModel;
    this.#buttonShowMoreModel = new ButtonShowMoreModel();
    this.#catalogueView = new CatalogueView();
    this.#container = container;
    this.#buttonShowMoreModel.addObserver(this.#rerenderProductsList);
  }

  init() {
    render(this.#catalogueView, this.#container, RenderPosition.AFTERBEGIN);
    this.#renderSorting();
    this.#renderCards();
    this.#renderButtonShowMore();
    this.#renderButtonToTopPresenter();
  }

  #renderSorting() {
    this.#sortingPresenter = new SortingPresenter({ container: this.#catalogueView.sortingContainer });
    this.#sortingPresenter.init();
  }

  #renderCards() {
    for (let i = 0; i < Math.min(COUNT_DISPLAY_PRODUCTS * this.#buttonShowMoreModel.page, this.#productsModel.products.length); i++) {
      this.#renderCatalogCard(this.#productsModel.products[i]);
    }
    if (COUNT_DISPLAY_PRODUCTS * this.#buttonShowMoreModel.page >= this.#productsModel.products.length) {
      this.#removeButtonShowMore();
    }
  }

  #renderCatalogCard(product) {
    this.#catalogueCardPresenter = new CatalogueCardPresenter({ container: this.#catalogueView.cardListContainer, model: product});
    this.#catalogCardPresenters.set(product.id, this.#catalogueCardPresenter);
    this.#catalogueCardPresenter.init();
  }

  #removeAllCards() {
    this.#catalogCardPresenters.forEach((cardPresenter) => {
      cardPresenter.removeCard();
    });
    this.#catalogCardPresenters.clear();
  }

  #renderButtonShowMore() {
    this.#buttonShowMorePresenter = new ButtonShowMorePresenter({ container: this.#catalogueView.buttonContainer, model: this.#buttonShowMoreModel});
    this.#buttonShowMorePresenter.init();
  }

  #removeButtonShowMore() {
    this.#buttonShowMorePresenter.removeButton();
  }

  #renderButtonToTopPresenter() {
    this.#buttonToTopPresenter = new ButtonToTopPresenter({ container: this.#catalogueView.buttonContainer });
    this.#buttonToTopPresenter.init();
  }

  #rerenderProductsList = () => {
    this.#removeAllCards();
    this.#renderCards();
  };
}
