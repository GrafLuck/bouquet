import ButtonShowMoreView from './button-show-more-view.js';
import { render, remove } from '../framework/render.js';

export default class ButtonShowMorePresenter {
  #buttonShowMoreView = null;
  #model = null;
  #container = null;

  constructor({ container, model }) {
    this.#buttonShowMoreView = new ButtonShowMoreView({ handleButtonShowMoreClick: this.#handleButtonShowMoreClick });
    this.#model = model;
    this.#container = container;
  }

  init() {
    render(this.#buttonShowMoreView, this.#container);
  }

  #handleButtonShowMoreClick = () => {
    this.#model.page += 1;
  };

  removeButton() {
    remove(this.#buttonShowMoreView);
  }
}
