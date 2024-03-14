import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { GroceriesCartPageComponent } from '../groceries-module/groceries-cart-page/groceries-cart-page.component';
import { GroceriesListPageComponent } from '../groceries-module/groceries-list-page/groceries-list-page.component';

const routes: Routes = [
  { path: '', component: GroceriesListPageComponent },
  { path: 'cart', component: GroceriesCartPageComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class RoutingModule {}
