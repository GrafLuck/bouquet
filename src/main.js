// Импорт вендоров и утилит, не удаляйте его
import './vendor.js';
import { iosVhFix } from './utils/ios-vh-fix.js';
import { initModals } from './modals/init-modals.js';


// Ваши импорты...
import HeaderCountPresenter from './header/header-count-presenter.js';
import HeroPresenter from './hero/hero-presenter.js';
import MissionPresenter from './mission/mission-presenter.js';
import AdvantagesPresenter from './advantages/advantages-presenter.js';
import FiltersPresenter from './filters/filters-presenter.js';
import CataloguePresenter from './catalogue/catalogue-presenter.js';
import CartModel from './models/cart-model.js';
import CartApiService from './api/cart-api-service.js';
import ProductsApiService from './api/products-api-service.js';
import ProductsModel from './models/products-model.js';
import { AUTHORIZATION, END_POINT } from './const.js';
import ButtonShowMoreModel from './models/button-show-more-model.js';
import PopupPresenter from './popup/popup-presenter.js';

// Код для работы попапов, не удаляйте его
window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();

  window.addEventListener('load', () => {
    // Инициализация попапов
    initModals();
  });

  // Ваш код...
  const cartApiService = new CartApiService(END_POINT, AUTHORIZATION);
  const productsApiService = new ProductsApiService(END_POINT, AUTHORIZATION);
  const cartModel = new CartModel({ cartApiService });
  const productsModel = new ProductsModel({ productsApiService });
  const buttonShowMoreModel = new ButtonShowMoreModel();

  const headerContainer = document.querySelector('.header__container');
  const mainContainer = document.querySelector('main');
  const filtersPresenter = new FiltersPresenter({ container: mainContainer, productsModel: productsModel, buttonShowMoreModel: buttonShowMoreModel });
  const popupPresenter = new PopupPresenter({
    container: mainContainer,
    productsModel: productsModel,
    cartModel: cartModel,
    buttonShowMoreModel: buttonShowMoreModel,
    filtersPresenter: filtersPresenter
  });
  const headerCountPresenter = new HeaderCountPresenter({ container: headerContainer, cartModel: cartModel, popupPresenter: popupPresenter });
  const missionPresenter = new MissionPresenter({ container: mainContainer });
  const heroPresenter = new HeroPresenter({ container: mainContainer });
  const advantagesPresenter = new AdvantagesPresenter({ container: mainContainer });
  const cataloguePresenter = new CataloguePresenter({
    container: mainContainer,
    productsModel: productsModel,
    cartModel: cartModel,
    buttonShowMoreModel: buttonShowMoreModel,
  });

  Promise.all([productsModel.init(), cartModel.init()]).then(() => {
    headerCountPresenter.init();
    cataloguePresenter.init();
    filtersPresenter.init();
    advantagesPresenter.init();
    missionPresenter.init();
    heroPresenter.init();
  });
});
