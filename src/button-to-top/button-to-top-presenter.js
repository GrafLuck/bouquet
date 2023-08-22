import ButtonToTopView from './button-to-top-view.js';
import { render } from '../framework/render.js';

export default class ButtonToTopPresenter {
  #buttonToTopView = null;
  #container = null;

  constructor({ container }) {
    this.#buttonToTopView = new ButtonToTopView();
    this.#container = container;
  }

  init() {
    render(this.#buttonToTopView, this.#container);
  }
}
