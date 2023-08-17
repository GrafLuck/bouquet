import { render, RenderPosition } from "../framework/render";
import AdvantagesViewView from "./advantages-view";

export default class AdvantagesPresenter {
  #advantagesView = null;
  #container = null;

  constructor({ container }) {
    this.#advantagesView = new AdvantagesViewView();
    this.#container = container;
  }

  init() {
    render(this.#advantagesView, this.#container, RenderPosition.AFTERBEGIN)
  }
}
