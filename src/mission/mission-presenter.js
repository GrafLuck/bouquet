import { render, RenderPosition } from '../framework/render.js';
import MissionView from './mission-view.js';

export default class MissionPresenter {
  #missionView = null;
  #container = null;

  constructor({ container }) {
    this.#missionView = new MissionView();
    this.#container = container;
  }

  init() {
    render(this.#missionView, this.#container, RenderPosition.AFTERBEGIN);
  }
}
