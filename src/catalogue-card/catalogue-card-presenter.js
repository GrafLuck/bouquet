import { render } from "../framework/render";
import CatalogueCardView from "./catalogue-card-view";

export default class CatalogueCardPresenter {
  #catalogCardView = null;
  #container = null;

  constructor({ container }) {
    this.#catalogCardView = new CatalogueCardView();
    this.#container = container;
  }

  init() {
    render(this.#catalogCardView, this.#container);
  }
}
