import { remove, render } from '../framework/render.js';
import CatalogueCardView from './catalogue-card-view.js';
import CatalogueCardModalView from './catalogue-card-modal-view.js';
import { modals } from '../modals/init-modals.js';
import { ImageSlider } from '../utils/image-slider.js';
import { MAX_DESCRIPTION_LENGTH } from '../const.js';
import { initModals } from '../modals/init-modals.js';

export default class CatalogueCardPresenter {
  #catalogCardView = null;
  #catalogPopupView = null;
  #container = null;
  #productsModel = null;
  #cartModel = null;
  #product = null;
  #isActive = false;

  constructor({ container, productsModel, cartModel, product, isActive }) {
    this.#productsModel = productsModel;
    this.#cartModel = cartModel;
    this.#product = product;
    this.#isActive = isActive;
    this.#container = container;

    this.#catalogCardView = new CatalogueCardView({
      card: {
        title: this.#product.title,
        description: this.#cutDescription(),
        price: this.#product.price,
        previewImage: this.#product.previewImage,
        type: this.#product.type,
        isActive: this.#isActive
      },
      handleButtonHeartClick: this.#handleButtonHeartClick,
      handleCartClick: this.#handleCartClick,
    });
  }

  init() {
    render(this.#catalogCardView, this.#container);
  }

  removeCard() {
    remove(this.#catalogCardView);
  }

  removeCardPopup = () => {
    remove(this.#catalogPopupView);
  };

  #renderPopup() {
    render(this.#catalogPopupView, document.querySelector('.modal-product'));
  }

  #cutDescription() {
    if (this.#product.description.length > MAX_DESCRIPTION_LENGTH) {
      return `${this.#product.description.substring(0, MAX_DESCRIPTION_LENGTH - 1)}&hellip;`;
    }
    return this.#product.description;
  }

  #handleButtonHeartClick = () => {
    const isAdd = this.#catalogCardView.buttonHeartBody.classList.toggle('button-heart__body-active');
    if (isAdd) {
      this.#productsModel.addProductToCart(this.#product.id).then(() => {
        this.#cartModel.init();
        this.#isActive = true;
        this.#catalogCardView.updateElement({ ...this.#product, isActive: this.#isActive });
      });

    } else {
      this.#productsModel.deleteProductFromCart(this.#product.id).then(() => {
        this.#cartModel.init();
        this.#isActive = false;
        this.#catalogCardView.updateElement({ ...this.#product, isActive: this.#isActive });
      });
    }
  };

  #handleButtonAddToCartClick = () => {
    const isAdd = this.#catalogPopupView.popupButton.innerText === 'отложить';
    if (isAdd) {
      this.#productsModel.addProductToCart(this.#product.id).then(() => {
        this.#cartModel.init();
        this.#isActive = true;
        this.#catalogCardView.updateElement({ ...this.#product, isActive: this.#isActive });
        this.#catalogPopupView.updateElement({ ...this.#product, isActive: this.#isActive });
        const imageSlider = new ImageSlider('.image-slider');
        imageSlider.init();
      });
    } else {
      this.#productsModel.deleteProductFromCart(this.#product.id).then(() => {
        this.#cartModel.init();
        this.#isActive = false;
        this.#catalogCardView.updateElement({ ...this.#product, isActive: this.#isActive });
        this.#catalogPopupView.updateElement({ ...this.#product, isActive: this.#isActive });
        const imageSlider = new ImageSlider('.image-slider');
        imageSlider.init();
      });
    }
  };

  #handleCartClick = (evt) => {
    if (evt.target.classList === this.#catalogCardView.buttonHeart.classList) {
      return;
    }
    this.#productsModel.getProduct(this.#product.id).then((product) => {
      this.#catalogPopupView = new CatalogueCardModalView({
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
      });
      this.#renderPopup();
      const modalSettings = {
        default: {
          preventDefault: true,
          stopPlay: true,
          lockFocus: true,
          startFocus: true,
          focusBack: true,
          eventTimeout: 400,
          openCallback: false,
          closeCallback: this.removeCardPopup,
        },
      };
      initModals(modalSettings);
      modals.open('popup-data-attr');
      const imageSlider = new ImageSlider('.image-slider');
      imageSlider.init();
    });
  };
}


