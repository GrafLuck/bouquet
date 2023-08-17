import AbstractView from "../framework/view/abstract-view";
import { createSortingTemplate } from "./sorting-template";

export default class SortingView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return createSortingTemplate();
  }
}
