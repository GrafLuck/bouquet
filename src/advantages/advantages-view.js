import AbstractView from "../framework/view/abstract-view";
import { createAdvantagesTemplate } from "./advantages-template";

export default class AdvantagesView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return createAdvantagesTemplate();
  }
}
