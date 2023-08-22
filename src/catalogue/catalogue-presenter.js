import SortingPresenter from '../sorting/sorting-presenter.js';
import CatalogueCardPresenter from '../catalogue-card/catalogue-card-presenter.js';
import CatalogueView from './catalogue-view.js';
import ButtonShowMorePresenter from '../button-show-more/button-show-more-presenter.js';
import ButtonToTopPresenter from '../button-to-top/button-to-top-presenter.js';
import CatalogueEmptyView from './catalogue-empty-view.js';
import { remove, render, RenderPosition } from '../framework/render.js';
import { COUNT_DISPLAY_PRODUCTS } from '../const.js';

export default class CataloguePresenter {
  #catalogueView = null;
  #catalogueEmptyView = null;
  #sortingPresenter = null;
  #catalogueCardPresenter = null;
  #buttonShowMorePresenter = null;
  #buttonToTopPresenter = null;
  #productsModel = null;
  #cartModel = null;
  #buttonHeartModel = null;
  #buttonShowMoreModel = null;
  #container = null;
  #catalogCardPresenters = new Map();

  constructor({ container, productsModel, cartModel, buttonHeartModel, buttonShowMoreModel }) {
    this.#productsModel = productsModel;
    this.#buttonHeartModel = buttonHeartModel;
    this.#cartModel = cartModel;
    this.#buttonShowMoreModel = buttonShowMoreModel;
    this.#container = container;
    this.#catalogueView = new CatalogueView();
    this.#catalogueEmptyView = new CatalogueEmptyView();
    this.#buttonShowMoreModel.addObserver(this.#rerenderProductsList);
    this.#productsModel.addObserver(this.#rerenderProductsList);
  }

  init() {
    render(this.#catalogueView, this.#container, RenderPosition.AFTERBEGIN);
    this.#renderSorting();
    this.#renderCards();
    if (COUNT_DISPLAY_PRODUCTS * this.#buttonShowMoreModel.page < this.#productsModel.filteringAndSortingProducts.length) {
      this.#renderButtonShowMore();
    }
    this.#renderButtonToTopPresenter();
  }

  #renderSorting() {
    this.#sortingPresenter = new SortingPresenter({ container: this.#catalogueView.sortingContainer, productsModel: this.#productsModel, buttonShowMoreModel: this.#buttonShowMoreModel });
    this.#sortingPresenter.init();
  }

  #renderCards() {
    if (this.#productsModel.filteringAndSortingProducts.length === 0) {
      this.#renderEmptyCatalog();
    }

    for (let i = 0; i < Math.min(COUNT_DISPLAY_PRODUCTS * this.#buttonShowMoreModel.page, this.#productsModel.filteringAndSortingProducts.length); i++) {
      this.#renderCatalogCard(this.#productsModel.filteringAndSortingProducts[i]);
    }
    if (this.#buttonShowMorePresenter && (COUNT_DISPLAY_PRODUCTS * this.#buttonShowMoreModel.page >= this.#productsModel.filteringAndSortingProducts.length)) {
      this.#removeButtonShowMore();
    }
  }

  #renderEmptyCatalog() {
    render(this.#catalogueEmptyView, this.#catalogueView.catalogueHeaderContainer, RenderPosition.AFTEREND);
  }

  #renderCatalogCard(product) {
    let isActive = false;
    if (Object.hasOwn(this.#cartModel.cart, 'products')) {
      isActive = Object.hasOwn(this.#cartModel.cart.products, product.id);
    }
    this.#catalogueCardPresenter = new CatalogueCardPresenter({
      container: this.#catalogueView.cardListContainer,
      productsModel: this.#productsModel,
      cartModel: this.#cartModel,
      buttonHeartModel: this.#buttonHeartModel,
      product: product,
      isActive: isActive
    });
    this.#catalogCardPresenters.set(product.id, this.#catalogueCardPresenter);
    this.#catalogueCardPresenter.init();
  }

  #removeAllCards() {
    if (this.#catalogueEmptyView) {
      remove(this.#catalogueEmptyView);
    }

    this.#catalogCardPresenters.forEach((cardPresenter) => {
      cardPresenter.removeCard();
    });
    this.#catalogCardPresenters.clear();
  }

  #renderButtonShowMore() {
    this.#buttonShowMorePresenter = new ButtonShowMorePresenter({ container: this.#catalogueView.buttonContainer, model: this.#buttonShowMoreModel });
    this.#buttonShowMorePresenter.init();
  }

  #removeButtonShowMore() {
    this.#buttonShowMorePresenter.removeButton();
    this.#buttonShowMorePresenter = null;
  }

  #renderButtonToTopPresenter() {
    this.#buttonToTopPresenter = new ButtonToTopPresenter({ container: this.#catalogueView.buttonContainer });
    this.#buttonToTopPresenter.init();
  }

  #rerenderProductsList = () => {
    this.#removeAllCards();
    this.#renderCards();
    if (!this.#buttonShowMorePresenter && (COUNT_DISPLAY_PRODUCTS * this.#buttonShowMoreModel.page < this.#productsModel.filteringAndSortingProducts.length)) {
      this.#renderButtonShowMore();
    }
  };
}
