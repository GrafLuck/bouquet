import { render } from "../framework/render";
import CatalogueCardPopupView from "./catalogue-card-popup-view";

export default class CatalogueCardPopupPresenter {
  #container = null;
  #catalogueCardPopupView = null;

  constructor({ container, card }) {
    this.#container = container;
    this.#catalogueCardPopupView = new CatalogueCardPopupView({ card: card });
  }

  init() {
    render(this.#catalogueCardPopupView, this.#container);
  }
}
