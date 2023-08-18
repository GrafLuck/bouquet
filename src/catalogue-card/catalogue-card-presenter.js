import { remove, render } from "../framework/render";
import CatalogueCardView from "./catalogue-card-view";

export default class CatalogueCardPresenter {
  #catalogCardView = null;
  #container = null;
  #productsModel = null;
  #buttonHeartModel = null;
  #product = null;
  #isActive = false;

  constructor({ container, productsModel, buttonHeartModel, product, isActive }) {
    this.#productsModel = productsModel;
    this.#buttonHeartModel = buttonHeartModel;
    this.#product = product;
    this.#isActive = isActive;
    this.#catalogCardView = new CatalogueCardView({
      card: {
        title: this.#product.title,
        description: this.#product.description,
        price: this.#product.price,
        previewImage: this.#product.previewImage,
        isActive: this.#isActive
      },
      handleButtonHeartClick: this.#handleButtonHeartClick
    });
    this.#container = container;
  }

  init() {
    render(this.#catalogCardView, this.#container);
  }

  removeCard() {
    remove(this.#catalogCardView);
  }

  #handleButtonHeartClick = () => {
    const isAdd = this.#catalogCardView.buttonHeartBody.classList.toggle('button-heart__body-active');
    if (isAdd) {
      this.#productsModel.addProductToCart(this.#product.id).then(() => {
        this.#buttonHeartModel.toggle = !this.#buttonHeartModel.toggle;
        this.#catalogCardView.updateElement({...this.#product, isActive: true})
      });

    } else {
      this.#productsModel.deleteProductFromCart(this.#product.id).then(() => {
        this.#buttonHeartModel.toggle = !this.#buttonHeartModel.toggle;
        this.#catalogCardView.updateElement({...this.#product, isActive: false})
      });
    }
  };
}


