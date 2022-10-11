import { Injectable } from '@angular/core';
import { Product , Shipping} from './products';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor(private httpClient:HttpClient) {}

  addToCard(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  deleteProduct(product: Product) {
    this.items =  this.items.filter((p) => p.id !== product.id);
  }

  getShippingPrices() {
    return this.httpClient.get<Shipping[]>('/assets/shipping.json');
  }

}
