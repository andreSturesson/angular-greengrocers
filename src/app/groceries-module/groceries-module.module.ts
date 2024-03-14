import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { GroceriesListComponent } from './groceries-list/groceries-list.component';
import { GroceriesService } from '../groceries.service';
import { GroceriesFilterComponent } from './groceries-filter/groceries-filter.component';
import { FormsModule } from '@angular/forms';
import { GroceriesTotalComponent } from './groceries-total/groceries-total.component';
import { GroceriesCartPageComponent } from './groceries-cart-page/groceries-cart-page.component';
import { GroceriesListPageComponent } from './groceries-list-page/groceries-list-page.component';

@NgModule({
  declarations: [
    CartComponent,
    GroceriesListComponent,
    GroceriesFilterComponent,
    GroceriesTotalComponent,
    GroceriesCartPageComponent,
    GroceriesListPageComponent,
  ],
  imports: [CommonModule, HttpClientModule, FormsModule],
  providers: [GroceriesService],
  exports: [
    CartComponent,
    GroceriesListComponent,
    GroceriesFilterComponent,
    GroceriesTotalComponent,
  ],
})
export class GroceriesModuleModule {}
