import AbstractView from '../framework/view/abstract-view';
import { createHeaderCountTemplate } from './header-count-template';

export default class HeaderCountView extends AbstractView{
  constructor() {
    super();
  }

  get template() {
    return createHeaderCountTemplate({count: 5, price: 10000});
  }
}
