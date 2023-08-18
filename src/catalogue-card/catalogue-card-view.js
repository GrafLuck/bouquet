import AbstractView from "../framework/view/abstract-view";
import { createCatalogueCardTemplate } from "./catalogue-card-template";

export default class CatalogueCardView extends AbstractView {
  #card = null;

  constructor(card) {
    super();
    this.#card = card;
  }

  get template() {
    return createCatalogueCardTemplate(this.#card);
  }
}
