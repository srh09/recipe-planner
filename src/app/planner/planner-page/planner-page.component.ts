import { Component, OnInit, ViewChild } from "@angular/core"
import { Router, ActivatedRoute } from "@angular/router"
import { Recipe } from "src/app/models/recipe.model"
import { RecipeService } from "src/app/services/recipe.service"
import { GroceryListService } from "src/app/services/grocery-list.service"
import { MatAccordion } from "@angular/material/expansion"

@Component({
  selector: "app-planner-page",
  templateUrl: "./planner-page.component.html",
  styleUrls: ["./planner-page.component.scss"]
})
export class PlannerPageComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion
  recipes: Recipe[] = []

  constructor(
    private recipeService: RecipeService,
    private groceryService: GroceryListService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes()
  }

  onNavigateCreateRecipe() {
    this.router.navigate(["recipe-detail"], { relativeTo: this.route })
  }

  onCreateRecipe() {
    this.router.navigate(["create"], { relativeTo: this.route })
  }

  onEditRecipe(index: number) {
    this.router.navigate([`recipe/${index}`], { relativeTo: this.route })
  }

  onAddRecipeToGroceryList(recipe: Recipe) {
    this.groceryService.addGroceries(recipe)
  }
}
