import AbstractView from '../framework/view/abstract-view.js';
import { createMissionTemplate } from './mission-template.js';

export default class MissionView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return createMissionTemplate();
  }
}
