import { Component } from '@angular/core';
import { GroceriesService, Grocery } from 'src/app/groceries.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  cart$: Observable<Grocery[]>;

  constructor(private groceriesService: GroceriesService) {
    this.cart$ = this.groceriesService.cart$;
  }

  increaseQuantity(grocery: Grocery) {
    this.groceriesService.increaseQuantity(grocery);
  }

  decreaseQuantity(grocery: Grocery) {
    this.groceriesService.decreaseQuantity(grocery);
  }
}
