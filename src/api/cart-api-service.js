import ApiService from '../framework/api-service.js';

export default class CartApiService extends ApiService {
  get cart() {
    return this._load({url: 'cart'})
      .then(ApiService.parseResponse);
  }
}
