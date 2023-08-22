import { RenderPosition, render } from '../framework/render.js';
import HeroView from './hero-view.js';

export default class HeroPresenter {
  #heroView = null;
  #container = null;

  constructor({ container }) {
    this.#heroView = new HeroView();
    this.#container = container;
  }

  init() {
    render(this.#heroView, this.#container, RenderPosition.AFTERBEGIN);
  }
}
