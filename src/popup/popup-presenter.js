import CatalogueCardPopupPresenter from "../catalogue-card/catalogue-card-popup-presenter";
import { RenderPosition, remove, render } from "../framework/render";
import PopupButtonCleanPresenter from "../popup-button-clean/popup-button-clean-presenter";
import PopupSumPresenter from "../popup-sum/popup-sum-presenter";
import PopupView from "./popup-view";

export default class PopupPresenter {
  #container = null;
  #popupView = null;
  #productsModel = null;
  #cartModel = null;
  #buttonShowMoreModel = null;
  #filtersPresenter = null;
  #catalogueCardPopupPresenter = null;
  #popupSumPresenter = null;
  #popupButtonCleanPresenter = null;
  #catalogueCardPopupPresenters = new Map();

  constructor({ container, productsModel, cartModel, filtersPresenter, buttonShowMoreModel }) {
    this.#container = container;
    this.#productsModel = productsModel;
    this.#cartModel = cartModel;
    this.#filtersPresenter = filtersPresenter;
    this.#buttonShowMoreModel = buttonShowMoreModel;
  }

  init() {
    this.#popupView = new PopupView({
      card: {
        count: this.#cartModel.cart.productCount,
        price: this.#cartModel.cart.sum
      },
      handleButtonClosePopupClick: this.#handleButtonClosePopupClick,
      handleButtonReturnToCatalogClick: this.#handleButtonReturnToCatalogClick
    });
    render(this.#popupView, this.#container, RenderPosition.AFTEREND);
    this.#renderCardList();
  }

  #renderCardList() {
    for (const [id, count] of Object.entries(this.#cartModel.cart.products)) {
      const product = this.#productsModel.products.find((product) => product.id === id);
      const card = {
        id: id,
        count: count,
        title: product.title,
        description: product.description,
        price: product.price,
        previewImage: product.previewImage
      };
      this.#catalogueCardPopupPresenter = new CatalogueCardPopupPresenter({ container: this.#popupView.productsContainer, card: card, productsModel: this.#productsModel, cartModel: this.#cartModel });
      this.#catalogueCardPopupPresenters.set(product.id, this.#catalogueCardPopupPresenter);
      this.#catalogueCardPopupPresenter.init();
    }
    this.#popupSumPresenter = new PopupSumPresenter({ container: this.#popupView.popupSumContainer, count: this.#cartModel.countProducts, price: this.#cartModel.totalPrice, cartModel: this.#cartModel });
    this.#popupSumPresenter.init();
    this.#popupButtonCleanPresenter = new PopupButtonCleanPresenter({ container: this.#popupView.ButtonCleanContainer, handleRemoveCardsHandle: this.removeAllCards });
    this.#popupButtonCleanPresenter.init();
  }

  #handleButtonClosePopupClick = () => {
    document.querySelector('main').style = 'display:block;';
    remove(this.#popupView);
  };

  #handleButtonReturnToCatalogClick = () => {
    document.querySelector('main').style = 'display:block;';
    remove(this.#popupView);
    this.#filtersPresenter.filterProducts('reason', 'all');
    this.#filtersPresenter.filterProducts('color', new Set().add('all'));
    this.#filtersPresenter.rerenderFilters();
    this.#buttonShowMoreModel.page = 1;
  };

  removeAllCards = (updatePopupCleanButtonState) => {
    const promises = [];
    this.#catalogueCardPopupPresenters.forEach((_, id) => {
      let countProducts = this.#cartModel.cart.products[id];
      for (let i = countProducts; i > 0; i--) {
        promises.push(this.#productsModel.deleteProductFromCart(id))
      }
    });
    Promise.all(promises).then(() => {
      this.#cartModel.init();
      this.#catalogueCardPopupPresenters.forEach((cardPopupPresenter) => {
        cardPopupPresenter.removeCardPopup();
      });
      this.#catalogueCardPopupPresenters.clear();
      updatePopupCleanButtonState();
    });
  }
}
