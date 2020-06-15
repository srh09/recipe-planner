import { Component, OnInit } from "@angular/core"
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from "@angular/forms"
import { RecipeService } from "src/app/services/recipe.service"
import { Recipe } from "src/app/models/recipe.model"

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.scss"],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe
  recipeDetailForm: FormGroup

  constructor(private formBuilder: FormBuilder, private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipe = this.recipeService.getRecipe(0)
    this.initializeRecipeDetailForm()
  }

  private initializeRecipeDetailForm() {
    let recipeInstructions = this.formBuilder.array([])
    for (let instruction of this.recipe.instructions) {
      recipeInstructions.push(
        this.formBuilder.group({
          instruction: this.formBuilder.control(instruction),
          temp: this.formBuilder.control("tempString"),
        })
      )
    }

    this.recipeDetailForm = this.formBuilder.group({
      name: [this.recipe.name, [Validators.required]],
      servings: [this.recipe.servings, [Validators.required, Validators.pattern("^[1-9][0-9]?$")]],
      description: [this.recipe.description],
      notes: [this.recipe.notes],
      instructions: recipeInstructions,
    })
  }

  onAddInstruction() {
    ;(<FormArray>this.recipeDetailForm.get("instructions")).push(new FormControl(null))
  }

  onDeleteInstruction(index: number) {
    ;(<FormArray>this.recipeDetailForm.get("instructions")).removeAt(index)
  }

  onSubmit() {
    console.log(this.recipeDetailForm.value)
  }

  get name() {
    return this.recipeDetailForm.get("name")
  }
  get servings() {
    return this.recipeDetailForm.get("servings")
  }
  get description() {
    return this.recipeDetailForm.get("description")
  }
  get notes() {
    return this.recipeDetailForm.get("notes")
  }

  get instructionControls() {
    return (<FormArray>this.recipeDetailForm.get("instructions")).controls
  }
}
