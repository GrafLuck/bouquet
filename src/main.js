// Импорт вендоров и утилит, не удаляйте его
import "./vendor";
import { ImageSlider } from "./utils/image-slider";
import { iosVhFix } from "./utils/ios-vh-fix";
import { modals, initModals } from "./modals/init-modals";


// Ваши импорты...
import HeaderCountPresenter from "./header/header-count-presenter";
import HeroPresenter from "./hero/hero-presenter";
import MissionPresenter from "./mission/mission-presenter";
import AdvantagesPresenter from "./advantages/advantages-presenter";
import FiltersPresenter from "./filters/filters-presenter";
import CataloguePresenter from "./catalogue/catalogue-presenter";
import CartModel from "./models/cart-model";
import CartApiService from "./api/cart-api-service";
import ProductsApiService from "./api/products-api-service";
import ProductsModel from "./models/products-model";
import { AUTHORIZATION, END_POINT } from "./const";
import ButtonHeartModel from "./models/button-heart-model";


// Код для работы попапов, не удаляйте его
window.addEventListener("DOMContentLoaded", () => {
  iosVhFix();

  window.addEventListener("load", () => {
    // Инициализация попапов
    initModals();
  });

  // Ваш код...
  const cartApiService = new CartApiService(END_POINT, AUTHORIZATION);
  const productsApiService = new ProductsApiService(END_POINT, AUTHORIZATION);
  const cartModel = new CartModel({ cartApiService });
  const productsModel = new ProductsModel({ productsApiService });
  const buttonHeartModel = new ButtonHeartModel();

  Promise.all([productsModel.init(), cartModel.init()]).then(() => {
    headerCountPresenter.init();
    cataloguePresenter.init();
    filtersPresenter.init();
    advantagesPresenter.init();
    missionPresenter.init();
    heroPresenter.init();
  });

  const headerContainer = document.querySelector('.header__container');
  const mainContainer = document.querySelector('main');
  const headerCountPresenter = new HeaderCountPresenter({ container: headerContainer, cartModel: cartModel, buttonHeartModel: buttonHeartModel });
  const missionPresenter = new MissionPresenter({ container: mainContainer });
  const heroPresenter = new HeroPresenter({ container: mainContainer });
  const advantagesPresenter = new AdvantagesPresenter({ container: mainContainer });
  const filtersPresenter = new FiltersPresenter({ container: mainContainer });
  const cataloguePresenter = new CataloguePresenter({ container: mainContainer, productsModel: productsModel, cartModel: cartModel, buttonHeartModel: buttonHeartModel });
});
