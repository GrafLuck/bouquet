import AbstractView from "../framework/view/abstract-view";
import { createButtonToTopTemplate } from "./button-to-top-template";

export default class ButtonToTopView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return createButtonToTopTemplate();
  }
}
