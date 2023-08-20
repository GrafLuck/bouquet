import AbstractStatefulView from "../framework/view/abstract-stateful-view";
import { createCardPopupTemplate } from "./catalogue-card-popup-template";

export default class CatalogueCardPopupView extends AbstractStatefulView {

  constructor({ card }) {
    super();
    this._state = { ...card };
    this._restoreHandlers();
  }

  get template() {
    return createCardPopupTemplate(this._state);
  }

  _restoreHandlers() {

  }

}
