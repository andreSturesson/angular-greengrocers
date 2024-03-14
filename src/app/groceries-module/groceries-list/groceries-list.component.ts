import { Component } from '@angular/core';
import { GroceriesService, Grocery } from '../../groceries.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-groceries-list',
  templateUrl: './groceries-list.component.html',
})
export class GroceriesListComponent {
  groceries$: Observable<Grocery[]>;

  constructor(public groceriesService: GroceriesService) {
    this.groceries$ = this.groceriesService.groceries$;
  }

  addToCart(grocerie: Grocery) {
    this.groceriesService.addToCart(grocerie);
  }

  async ngOnInit() {
    await this.groceriesService.getGroceries();
  }
}
