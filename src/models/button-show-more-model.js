import Observable from '../framework/observable.js';

export default class ButtonShowMoreModel extends Observable {
  #page = 1;

  get page() {
    return this.#page;
  }

  set page(countPage) {
    this.#page = countPage;
    this._notify('CHANGE_COUNT_PAGE', this.#page);
  }
}
