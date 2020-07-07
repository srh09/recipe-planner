import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { PlannerPageComponent } from "./planner-page/planner-page.component"
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component"

const routes: Routes = [
  { path: "", component: PlannerPageComponent },
  { path: "create", component: RecipeDetailComponent },
  { path: "recipe/:rIndex", component: RecipeDetailComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlannerRoutingModule {}
