import AbstractView from "../framework/view/abstract-view";
import { createButtonShowMoreTemplate } from "./button-show-more-template";

export default class ButtonShowMoreView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return createButtonShowMoreTemplate();
  }
}
