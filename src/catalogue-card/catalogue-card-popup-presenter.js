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
    this.#catalogueCardPopupView = new CatalogueCardPopupView({ card: card, handleButtonCloseClick: this.#handleButtonCloseClick });
  }

  init() {
    render(this.#catalogueCardPopupView, this.#container);
  }

  #handleButtonCloseClick = () => {
    this.#productsModel.deleteProductFromCart(this.#card.id).then(() => {
      this.removeCardPopup();
      this.#cartModel.init();


      //пересчитать количество и стоимость в подвале
      //убрать отметки о том, что букет выбран на главной странице
    });
  };

  removeCardPopup() {
    remove(this.#catalogueCardPopupView);
  }
}
