import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products: Product[] | undefined;
  total: number |undefined;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.products = this.cartService.getItems();
    this.total = this.products.map(( p) =>  p.price).reduce((sum, p) => sum + p);
  }

  delete(product: Product) {
    this.cartService.deleteProduct(product)
  }
}
