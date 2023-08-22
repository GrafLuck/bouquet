import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import { createPopupButtonClean } from './popup-button-clean-template.js';

export default class PopupButtonCleanView extends AbstractStatefulView {
  #handleButtonCleanClick = null;

  constructor(isClean, handleButtonCleanClick) {
    super();
    this._state = isClean;
    this.#handleButtonCleanClick = handleButtonCleanClick;
    this._restoreHandlers();
  }

  get template() {
    return createPopupButtonClean(this._state);
  }

  updateButtonCleanClick = () => {
    this.updateElement({ isClean: false });
  };

  _restoreHandlers() {
    this.element.addEventListener('click', this.#onButtonCleanClick);
  }

  #onButtonCleanClick = async (evt) => {
    evt.preventDefault();
    this.updateElement({ isClean: true });
    await this.#handleButtonCleanClick();
  };
}
