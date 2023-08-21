import AbstractStatefulView from "../framework/view/abstract-stateful-view";
import { createSortingTemplate } from "./sorting-template";

export default class SortingView extends AbstractStatefulView {
  #handleIncreaseSortingButtonClick = null;
  #handleDescendingSortingButtonClick = null;

  constructor(handleIncreaseSortingButtonClick, handleDescendingSortingButtonClick) {
    super();
    this._state = { isIncrease: true };
    this.#handleIncreaseSortingButtonClick = handleIncreaseSortingButtonClick;
    this.#handleDescendingSortingButtonClick = handleDescendingSortingButtonClick;
    this._restoreHandlers();
  }

  get template() {
    return createSortingTemplate(this._state);
  }

  _restoreHandlers() {
    this.element.querySelector('#increase').addEventListener('click', this.#onIncreaseSortingButtonClick);
    this.element.querySelector('#descending').addEventListener('click', this.#onDescendingSortingButtonClick);
  }

  #onIncreaseSortingButtonClick = (evt) => {
    evt.preventDefault();
    this.#handleIncreaseSortingButtonClick();
    this.updateElement({ isIncrease: true });
  };

  #onDescendingSortingButtonClick = (evt) => {
    evt.preventDefault();
    this.#handleDescendingSortingButtonClick();
    this.updateElement({ isIncrease: false });
  };

}
