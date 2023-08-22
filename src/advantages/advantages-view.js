import AbstractView from '../framework/view/abstract-view.js';
import { createAdvantagesTemplate } from './advantages-template.js';

export default class AdvantagesView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return createAdvantagesTemplate();
  }
}
