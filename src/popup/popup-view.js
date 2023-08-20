import AbstractView from "../framework/view/abstract-view";
import { createPopupTemplate } from "./popup-template";

export default class PopupView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return createPopupTemplate();
  }

  get productsContainer() {
    return this.element.querySelector('.popup-deferred__catalog');
  }
}
