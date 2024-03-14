import { Component } from '@angular/core';
import { GroceriesService } from 'src/app/groceries.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-groceries-total',
  templateUrl: './groceries-total.component.html',
  styleUrls: ['./groceries-total.component.css'],
})
export class GroceriesTotalComponent {
  total = this.groceriesService.total;
  private cartSubscription: Subscription = new Subscription();

  ngOnInit() {
    this.cartSubscription = this.groceriesService.cart$.subscribe((cart) => {
      this.total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    });
  }

  ngOnDestroy() {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  constructor(public groceriesService: GroceriesService) {}
}
