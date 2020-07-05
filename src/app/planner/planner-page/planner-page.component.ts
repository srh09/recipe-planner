import { Component, OnInit } from "@angular/core"
import { Router, ActivatedRoute } from "@angular/router"
import { Recipe } from 'src/app/models/recipe.model'
import { RecipeService } from 'src/app/services/recipe.service'

@Component({
  selector: "app-planner-page",
  templateUrl: "./planner-page.component.html",
  styleUrls: ["./planner-page.component.scss"],
})
export class PlannerPageComponent implements OnInit {

  recipes: Recipe[] = []

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes()
  }

  onNavigateCreateRecipe() {
    this.router.navigate(["recipe-detail"], { relativeTo: this.route })
  }
}
