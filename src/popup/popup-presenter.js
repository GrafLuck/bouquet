import CatalogueCardPopupPresenter from "../catalogue-card/catalogue-card-popup-presenter";
import { RenderPosition, render } from "../framework/render";
import PopupSumPresenter from "../popup-sum/popup-sum-presenter";
import PopupView from "./popup-view";

export default class PopupPresenter {
  #container = null;
  #popupView = null;
  #productModel = null;
  #cartModel = null;
  #catalogueCardPopupPresenter = null;
  #popupSumPresenter = null;

  constructor({ container, productsModel, cartModel }) {
    this.#container = container;
    this.#productModel = productsModel;
    this.#cartModel = cartModel;
  }

  init() {
    this.#popupView = new PopupView({
      card: {
        count: this.#cartModel.cart.productCount,
        price: this.#cartModel.cart.sum
      }
    });
    render(this.#popupView, this.#container, RenderPosition.AFTEREND);
    this.#renderCardList();
  }

  #renderCardList() {
    for (const [id, count] of Object.entries(this.#cartModel.cart.products)) {
      const product = this.#productModel.products.find((product) => product.id === id);
      const card = {
        id: id,
        count: count,
        title: product.title,
        description: product.description,
        price: product.price,
        previewImage: product.previewImage
      };
      this.#catalogueCardPopupPresenter = new CatalogueCardPopupPresenter({ container: this.#popupView.productsContainer, card: card, productsModel: this.#productModel, cartModel: this.#cartModel });
      this.#catalogueCardPopupPresenter.init();
    }
    this.#popupSumPresenter = new PopupSumPresenter({ container: this.#popupView.popupSumContainer, count: this.#cartModel.countProducts, price: this.#cartModel.totalPrice, cartModel: this.#cartModel });
    this.#popupSumPresenter.init();
  }
}