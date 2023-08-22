import AbstractView from '../framework/view/abstract-view.js';
import { createButtonToTopTemplate } from './button-to-top-template.js';

export default class ButtonToTopView extends AbstractView {
  get template() {
    return createButtonToTopTemplate();
  }
}
