import AbstractView from "../framework/view/abstract-view";
import { createMissionTemplate } from "./mission-template";

export default class MissionView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return createMissionTemplate();
  }
}
