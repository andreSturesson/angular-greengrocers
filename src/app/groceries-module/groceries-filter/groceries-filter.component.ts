import { Component, EventEmitter, Output } from '@angular/core';
import { GroceriesService, Grocery } from 'src/app/groceries.service';

@Component({
  selector: 'app-groceries-filter',
  templateUrl: './groceries-filter.component.html',
  styleUrls: ['./groceries-filter.component.css'],
})
export class GroceriesFilterComponent {
  filter: string = '';

  constructor(public groceriesService: GroceriesService) {}

  filterGroceries(value: string) {}

  sortByType(type: string) {
    this.groceriesService.filterGroceriesByType(type);
  }

  sortByPrice() {
    this.groceriesService.sortGroceriesByPrice();
  }

  sortByName() {
    this.groceriesService.sortGroceriesByName();
  }
}
