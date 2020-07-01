import { Injectable } from "@angular/core"
import { Recipe } from "../models/recipe.model"
import { Subject } from "rxjs"
import { Ingredient } from "../models/ingredient.model"
import { IMeasurement } from "../models/measurements"

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>()

  private ing: Ingredient[] = [
    new Ingredient("Tomato", 3),
    new Ingredient("Cheese", 4),
    new Ingredient("Flour", 2),
    new Ingredient("Rolled Oats", 1, "cup"),
    new Ingredient("Chia Seeds", 1, "tablespoon"),
    new Ingredient("Flax Seeds", 1, "tablespoon", "ground"),
    new Ingredient("Cinnamon", 1.5, "teaspoon", "ground"),
    new Ingredient("Almond Milk", 1.75, "cup"),
    new Ingredient("Date Syrup", 2, "tablespoon"),
    new Ingredient("Vanilla Extract", 1, "teaspoon"),
    new Ingredient("Blueberries", 0.66, "cup")
  ]
  private recipes: Recipe[] = [
    new Recipe(
      "Summertime Oatmeal",
      2,
      `Some people think of oats as a hot cereal perfect for when leaves start falling or there's snow on the ground, 
      but I love them all year round.  In our house, we call this version Summertime Oatmeal because it's a cool and refreshing way to enjoy oatmeal
      even when it is sweating outside.  Prepare it the night before and spoon the goodness into jars for a quick and easy breakfast.`,
      "Easiest to make a double batch",
      [
        "Combine all ingredients in a medium bowl and stir to mix.",
        "Spoon into two 1-pint jars with tight-fitting lids or two small bowls and cover tightly.",
        "Refrigerate overnight and remove the vanilla bean before serving."
      ],
      [this.ing[3], this.ing[4], this.ing[5], this.ing[6], this.ing[7], this.ing[8], this.ing[9], this.ing[10]],
      "assets/summertime_oatmeal.jpg"
    ),
    new Recipe(
      "Pizza",
      3,
      "This is a description of Pizza, text will go here...",
      "recipe pizza notes will go on this line",
      ["step one text", "step two text", "step three instructions"],
      [this.ing[0], this.ing[1], this.ing[2]]
    )
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
