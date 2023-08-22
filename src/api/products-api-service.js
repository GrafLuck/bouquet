import ApiService from '../framework/api-service.js';
import { Method } from '../const.js';

export default class ProductsApiService extends ApiService {
  get products() {
    return this._load({ url: 'products' })
      .then(ApiService.parseResponse);
  }

  async product(id) {
    return this._load({ url: `products/${id}` })
      .then(ApiService.parseResponse);
  }

  async addProductToCart(id) {
    const response = await this._load({
      url: `products/${id}`,
      method: Method.PUT,
    });

    const parsedResponse = await ApiService.parseResponse(response);

    return parsedResponse;
  }

  async deleteProductFromCart(id) {
    return await this._load({
      url: `products/${id}`,
      method: Method.DELETE,
    });
  }
}
