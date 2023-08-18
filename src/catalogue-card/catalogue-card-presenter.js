import { render } from "../framework/render";
import CatalogueCardView from "./catalogue-card-view";

export default class CatalogueCardPresenter {
  #catalogCardView = null;
  #container = null;
  #model = null;

  constructor({ container, model }) {
    this.#model = model;
    this.#catalogCardView = new CatalogueCardView({
      title: this.#model.title,
      description: this.#model.description,
      price: this.#model.price,
      previewImage: this.#model.previewImage
    });
    this.#container = container;
  }

  init() {
    render(this.#catalogCardView, this.#container);
  }
}


