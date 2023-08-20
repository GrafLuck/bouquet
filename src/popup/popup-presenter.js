import { RenderPosition, render } from "../framework/render";
import PopupView from "./popup-view";

export default class PopupPresenter {
  #container = null;
  #popupView = null;

  constructor({ container }) {
    this.#container = container;
    this.#popupView = new PopupView();
  }

  init() {
    render(this.#popupView, this.#container, RenderPosition.AFTEREND);
  }
}
