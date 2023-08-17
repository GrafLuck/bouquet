import AbstractView from "../framework/view/abstract-view";
import { createCatalogueCardTemplate } from "./catalogue-card-template";

export default class CatalogueCardView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return createCatalogueCardTemplate();
  }
}
