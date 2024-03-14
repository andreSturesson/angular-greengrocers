import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GroceriesModuleModule } from './groceries-module/groceries-module.module';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GroceriesModuleModule, RouterModule, RoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
