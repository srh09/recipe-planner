import { Injectable } from "@angular/core"
import { Subject } from "rxjs"
import { Ingredient } from "../models/ingredient.model"
import { Recipe } from "../models/recipe.model"

@Injectable({
  providedIn: "root"
})
export class GroceryListService {
  groceriesChanged = new Subject<Ingredient[]>()
  private groceries: Ingredient[] = []

  constructor() {}

  addGrocery(ingredient: Ingredient) {
    this.groceries.push(ingredient)
    this.emitGroceriesChanged()
  }

  addGroceries(recipe: Recipe) {
    for (let ingredient of recipe.ingredients) {
      if (ingredient instanceof Ingredient) {
        this.groceries.push(ingredient)
      } else {
        this.addGroceries(ingredient)
      }
    }
    this.emitGroceriesChanged()
  }

  getGroceries() {
    return this.groceries.slice()
  }

  saveGroceries() {
    //Upload max 50 groceries to user grocery list
  }

  deleteGrocery(index: number) {
    this.groceries.splice(index, 1)
    this.emitGroceriesChanged()
  }

  deleteGroceries() {
    this.groceries = []
    this.emitGroceriesChanged()
  }

  private emitGroceriesChanged() {
    this.groceriesChanged.next(this.groceries.slice())
  }
}
