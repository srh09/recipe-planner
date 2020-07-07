import { Component, OnInit, OnDestroy } from "@angular/core"
import { GroceryListService } from "src/app/services/grocery-list.service"
import { Ingredient } from "src/app/models/ingredient.model"
import { Subscription } from "rxjs"

@Component({
  selector: "app-grocery-list-page",
  templateUrl: "./grocery-list-page.component.html",
  styleUrls: ["./grocery-list-page.component.scss"]
})
export class GroceryListPageComponent implements OnInit, OnDestroy {
  groceries: Ingredient[] = []
  private groceriesChanged: Subscription

  constructor(private groceryListService: GroceryListService) {}

  ngOnInit() {
    this.groceries = this.groceryListService.getGroceries()
    this.groceriesChanged = this.groceryListService.groceriesChanged.subscribe((ingredients: Ingredient[]) => {
      this.groceries = ingredients
    })
  }

  ngOnDestroy(): void {
    this.groceriesChanged.unsubscribe()
  }
}
