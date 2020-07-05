import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

import { SharedModule } from '../shared/shared.module'
import { GroceryListRoutingModule } from "./grocery-list-routing.module"
import { GroceryListPageComponent } from "./grocery-list-page/grocery-list-page.component"

@NgModule({
  declarations: [GroceryListPageComponent],
  imports: [CommonModule, GroceryListRoutingModule, SharedModule]
})
export class GroceryListModule {}
