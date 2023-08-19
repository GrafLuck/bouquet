import { remove, render } from "../framework/render";
import CatalogueCardView from "./catalogue-card-view";
import CataloguePopupView from "./catalogue-popup-view";
import { modals } from "../modals/init-modals.js";
import { ImageSlider } from "../utils/image-slider.js";

export default class CatalogueCardPresenter {
  #catalogCardView = null;
  #catalogPopupView = null;
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
    this.#container = container;

    this.#catalogCardView = new CatalogueCardView({
      card: {
        title: this.#product.title,
        description: this.#product.description,
        price: this.#product.price,
        previewImage: this.#product.previewImage,
        isActive: this.#isActive
      },
      handleButtonHeartClick: this.#handleButtonHeartClick,
      handleCartClick: this.#handleCartClick,
    });
  }

  init() {
    render(this.#catalogCardView, this.#container);
  }

  #renderPopup() {
    render(this.#catalogPopupView, document.querySelector('.modal-product'));
    document.querySelector('.modal-product__btn-close').addEventListener('click', this.#onButtonClosePopupClick);
    document.addEventListener('keydown', this.#onEscKeydown);
    document.addEventListener('click', this.#onNotPopupClick)
  }

  removeCard() {
    remove(this.#catalogCardView);
  }

  #onButtonClosePopupClick = () => {
    remove(this.#catalogPopupView);
    document.querySelector('.modal-product__btn-close').removeEventListener('click', this.#onButtonClosePopupClick);
  };

  #onEscKeydown = (evt) => {
    const isEscKey = evt.key === "Escape" || evt.key === "Esc";

    if (isEscKey) {
      remove(this.#catalogPopupView);
      document.removeEventListener('keydown', this.#onEscKeydown);
    }
  };

  #onNotPopupClick = (evt) => {
    const withinBoundaries = evt.composedPath().includes(this.#catalogPopupView.element);

    if (!withinBoundaries) {
      remove(this.#catalogPopupView);
      document.removeEventListener('click', this.#onNotPopupClick)
    }
  };

  #handleButtonHeartClick = () => {
    const isAdd = this.#catalogCardView.buttonHeartBody.classList.toggle('button-heart__body-active');
    if (isAdd) {
      this.#productsModel.addProductToCart(this.#product.id).then(() => {
        this.#buttonHeartModel.toggle = !this.#buttonHeartModel.toggle;
        this.#isActive = true;
        this.#catalogCardView.updateElement({ ...this.#product, isActive: this.#isActive })
      });

    } else {
      this.#productsModel.deleteProductFromCart(this.#product.id).then(() => {
        this.#buttonHeartModel.toggle = !this.#buttonHeartModel.toggle;
        this.#isActive = false;
        this.#catalogCardView.updateElement({ ...this.#product, isActive: this.#isActive })
      });
    }
  };

  #handleButtonAddToCartClick = () => {

  };

  #handleCartClick = (evt) => {
    if (evt.target.classList === this.#catalogCardView.buttonHeart.classList) {
      return;
    }
    this.#productsModel.getProduct(this.#product.id).then((product) => {
      this.#catalogPopupView = new CataloguePopupView({
        card: {
          title: product.title,
          description: product.description,
          price: product.price,
          previewImage: product.previewImage,
          isActive: this.#isActive,
          authorPhoto: product.authorPhoto,
          images: product.images,
        },
        handleButtonAddToCartClick: this.#handleButtonAddToCartClick
      })
      this.#renderPopup();
      modals.open("popup-data-attr");
      const imageSlider = new ImageSlider(".image-slider");
      imageSlider.init();
    })
  };
}


