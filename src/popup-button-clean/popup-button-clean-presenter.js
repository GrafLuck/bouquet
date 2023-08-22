import { render } from '../framework/render.js';
import PopupButtonCleanView from './popup-button-clean-view.js';

export default class PopupButtonCleanPresenter {
  #container = null;
  #popupButtonCleanView = null;
  #handleRemoveCardsHandle = null;

  constructor({ container, handleRemoveCardsHandle }) {
    this.#container = container;
    this.#popupButtonCleanView = new PopupButtonCleanView(false, this.#handleButtonCleanClick);
    this.#handleRemoveCardsHandle = handleRemoveCardsHandle;
  }

  init() {
    render(this.#popupButtonCleanView, this.#container);
  }

  #handleButtonCleanClick = () => {
    this.#handleRemoveCardsHandle(this.#popupButtonCleanView.updateButtonCleanClick);
  };
}
