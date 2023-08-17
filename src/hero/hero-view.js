import AbstractView from "../framework/view/abstract-view";
import { createHeroTemplate } from "./hero-template";

export default class HeroView extends AbstractView {
  constructor() {
    super();
  };

  get template() {
    return createHeroTemplate();
  }
}
