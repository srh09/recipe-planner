import { Injectable } from "@angular/core"
import { Recipe } from "../models/recipe.model"
import { Subject } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>()

  private recipes: Recipe[] = [
    new Recipe(
      "Pizza",
      3,
      "This is a description of Pizza, text will go here...",
      "recipe pizza notes will go on this line",
      ["step one text", "step two text", "step three instructions"]
    ),
  ]

  constructor() {}

  getRecipe(index: number) {
    let recipe = this.recipes[index]
    return recipe
  }

  getRecipes() {
    return this.recipes.slice()
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe)
    this.recipesChanged.next(this.recipes.slice())
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe
    this.recipesChanged.next(this.recipes.slice())
  }

  updateRecipes(recipeList: Recipe[]) {
    this.recipes = recipeList
    this.recipesChanged.next(this.recipes.slice())
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1)
    this.recipesChanged.next(this.recipes.slice())
  }
}
