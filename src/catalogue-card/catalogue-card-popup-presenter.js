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
    const promises = [];
    for (let i = 0; i < this.#card.count; i++) {
      promises.push(this.#productsModel.deleteProductFromCart(this.#card.id));
    }

    Promise.all(promises).then(() => {
      this.removeCardPopup();
      this.#cartModel.init();
    });
  };

  #handleButtonMinusClick = (count) => {
    this.#productsModel.deleteProductFromCart(this.#card.id).then(() => {
      this.#cartModel.init();
      this.#card.count = count;
    });
  };

  #handleButtonPlusClick = (count) => {
    this.#productsModel.addProductToCart(this.#card.id).then(() => {
      this.#cartModel.init();
      this.#card.count = count;
    });
  };
}
