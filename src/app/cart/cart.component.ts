import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  checkoutForm = this.formBuilder.group({name:'',address:''});

  constructor(private cartService: CartService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.products = this.cartService.getItems();
    //this.total = this.products?.map(( p) =>  p.price)?.reduce((sum, p) => sum + p);

  }

  delete(product: Product) {
    this.cartService.deleteProduct(product)
  }

  onSubmit() : void {
    this.products = this.cartService.clearCart();
    console.warn('Your order has been submitted ', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
