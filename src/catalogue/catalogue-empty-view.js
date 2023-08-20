import AbstractView from "../framework/view/abstract-view";
import { createCatalogueEmptyTemplate } from "./catalogue-empty-template";

export default class CatalogueEmptyView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return createCatalogueEmptyTemplate();
  }
}
