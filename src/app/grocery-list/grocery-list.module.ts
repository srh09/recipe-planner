import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroceryListRoutingModule } from './grocery-list-routing.module';
import { GroceryListPageComponent } from './grocery-list-page/grocery-list-page.component';


@NgModule({
  declarations: [GroceryListPageComponent],
  imports: [
    CommonModule,
    GroceryListRoutingModule
  ]
})
export class GroceryListModule { }
