import AbstractView from '../framework/view/abstract-view.js';
import { createHeroTemplate } from './hero-template.js';

export default class HeroView extends AbstractView {
  get template() {
    return createHeroTemplate();
  }
}
