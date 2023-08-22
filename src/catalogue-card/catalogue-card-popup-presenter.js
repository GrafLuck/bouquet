import { remove, render } from '../framework/render.js';
import CatalogueCardPopupView from './catalogue-card-popup-view.js';

export default class CatalogueCardPopupPresenter {
  #container = null;
  #catalogueCardPopupView = null;
  #productsModel = null;
  #cartModel = null;
  #card = null;

  constructor({ container, card, productsModel, cartModel }) {
    this.#container = container;
    this.#card = card;
    this.#productsModel = productsModel;
    this.#cartModel = cartModel;
    this.#catalogueCardPopupView = new CatalogueCardPopupView({
      card: this.#card,
      handleButtonCloseClick: this.#handleButtonCloseClick,
      handleButtonMinusClick: this.#handleButtonMinusClick,
      handleButtonPlusClick: this.#handleButtonPlusClick
    });
  }

  init() {
    render(this.#catalogueCardPopupView, this.#container);
  }

  removeCardPopup = () => {
    remove(this.#catalogueCardPopupView);
  };

  #handleButtonCloseClick = () => {
    this.#productsModel.deleteProductFromCart(this.#card.id).then(() => {
      this.removeCardPopup();
      this.#cartModel.init();
    });
  };

  #handleButtonMinusClick = () => {
    this.#productsModel.deleteProductFromCart(this.#card.id).then(() => {
      this.#cartModel.init();
    });
  };

  #handleButtonPlusClick = () => {
    this.#productsModel.addProductToCart(this.#card.id).then(() => {
      this.#cartModel.init();
    });
  };
}
