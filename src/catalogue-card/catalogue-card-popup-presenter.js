import { remove, render } from "../framework/render";
import CatalogueCardPopupView from "./catalogue-card-popup-view";

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

  #handleButtonCloseClick = () => {
    this.#productsModel.deleteProductFromCart(this.#card.id).then(() => {
      this.#removeCardPopup();
      this.#cartModel.init();


      //убрать отметки о том, что букет выбран на главной странице
    });
  };

  #handleButtonMinusClick = () => {
    this.#productsModel.deleteProductFromCart(this.#card.id).then(() => {
      this.#cartModel.init();
      //const countProduct = Object.entries(this.#cartModel.cart.products).find((product) => product[0] == this.#card.id)[1];
      //убрать отметки о том, что букет выбран на главной странице
    });
  };

  #handleButtonPlusClick = () => {
    this.#productsModel.addProductToCart(this.#card.id).then(() => {
      this.#cartModel.init();
      //const countProduct = Object.entries(this.#cartModel.cart.products).find((product) => product[0] == this.#card.id)[1];
      //убрать отметки о том, что букет выбран на главной странице
    });
  };

  #removeCardPopup() {
    remove(this.#catalogueCardPopupView);
  }
}
