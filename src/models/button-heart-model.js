import Observable from "../framework/observable";

export default class ButtonHeartModel extends Observable {
  #toggle = false;

  get toggle() {
    return this.#toggle;
  }

  set toggle(toggle) {
    this.#toggle = toggle;
    this._notify('BUTTON_HEART_CLICK', this.toggle);
  }
}
