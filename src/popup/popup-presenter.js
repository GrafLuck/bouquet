import CatalogueCardPopupPresenter from '../catalogue-card/catalogue-card-popup-presenter.js';
import PopupButtonCleanPresenter from '../popup-button-clean/popup-button-clean-presenter.js';
import PopupSumPresenter from '../popup-sum/popup-sum-presenter.js';
import PopupView from './popup-view.js';
import { RenderPosition, remove, render } from '../framework/render.js';
import { Filters, FiltersReason, FiltersColor } from '../const.js';

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

  removeAllCards = (updatePopupCleanButtonState) => {
    const promises = [];
    this.#catalogueCardPopupPresenters.forEach((_, id) => {
      const countProducts = this.#cartModel.cart.products[id];
      for (let i = countProducts; i > 0; i--) {
        promises.push(this.#productsModel.deleteProductFromCart(id));
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
  };

  #renderCardList() {
    for (const [id, count] of Object.entries(this.#cartModel.cart.products)) {
      const findingProduct = this.#productsModel.products.find((product) => product.id === id);
      const card = {
        id: id,
        count: count,
        title: findingProduct.title,
        description: findingProduct.description,
        price: findingProduct.price,
        previewImage: findingProduct.previewImage
      };
      this.#catalogueCardPopupPresenter = new CatalogueCardPopupPresenter({ container: this.#popupView.productsContainer, card: card, productsModel: this.#productsModel, cartModel: this.#cartModel });
      this.#catalogueCardPopupPresenters.set(findingProduct.id, this.#catalogueCardPopupPresenter);
      this.#catalogueCardPopupPresenter.init();
    }
    this.#popupSumPresenter = new PopupSumPresenter({ container: this.#popupView.popupSumContainer, count: this.#cartModel.countProducts, price: this.#cartModel.totalPrice, cartModel: this.#cartModel });
    this.#popupSumPresenter.init();
    this.#popupButtonCleanPresenter = new PopupButtonCleanPresenter({ container: this.#popupView.ButtonCleanContainer, handleRemoveCardsHandle: this.removeAllCards });
    this.#popupButtonCleanPresenter.init();
  }

  #handleButtonClosePopupClick = () => {
    this.#popupView.displayMainPage();
    remove(this.#popupView);
    const temp = this.#buttonShowMoreModel.page;
    this.#buttonShowMoreModel.page = temp;
  };

  #handleButtonReturnToCatalogClick = () => {
    this.#popupView.displayMainPage();
    remove(this.#popupView);
    this.#filtersPresenter.filterProducts(Filters.REASON, FiltersReason.ALL.type);
    this.#filtersPresenter.filterProducts(Filters.COLOR, new Set().add(FiltersColor.ALL.type));
    this.#filtersPresenter.rerenderFilters();
    this.#buttonShowMoreModel.page = 1;
  };
}
