import { render, RenderPosition } from '../framework/render.js';
import AdvantagesView from './advantages-view.js';

export default class AdvantagesPresenter {
  #advantagesView = null;
  #container = null;

  constructor({ container }) {
    this.#advantagesView = new AdvantagesView();
    this.#container = container;
  }

  init() {
    render(this.#advantagesView, this.#container, RenderPosition.AFTERBEGIN);
  }
}
