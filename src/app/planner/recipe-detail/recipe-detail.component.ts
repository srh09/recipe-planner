import { Component, OnInit } from "@angular/core"
import { FormGroup, Validators, FormBuilder, FormArray } from "@angular/forms"
import { RecipeService } from "src/app/services/recipe.service"
import { Recipe } from "src/app/models/recipe.model"

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.scss"]
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe
  recipeDetailForm: FormGroup

  constructor(private formBuilder: FormBuilder, private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipe = this.recipeService.getRecipe(0)
    this.initializeRecipeDetailForm()
  }

  onPushInstruction() {
    this.instructions.push(
      this.formBuilder.group({
        instruction: this.formBuilder.control(null, [Validators.required])
      })
    )
  }

  onInsertInstruction(index: number) {
    this.instructions.insert(
      index,
      this.formBuilder.group({
        instruction: this.formBuilder.control(null, [Validators.required])
      })
    )
  }

  onDeleteInstruction(index: number) {
    this.instructions.removeAt(index)
  }

  onPushIngredient() {
    this.ingredients.push(
      this.formBuilder.group({
        ingredient: this.formBuilder.control(null, [Validators.required]),
        quantity: this.formBuilder.control(null, [Validators.required])
      })
    )
  }

  onInsertIngredient(index: number) {
    this.ingredients.insert(
      index,
      this.formBuilder.group({
        name: this.formBuilder.control(null, [Validators.required]),
        quantity: this.formBuilder.control(null, [Validators.required])
      })
    )
  }

  onDeleteIngredient(index: number) {
    this.ingredients.removeAt(index)
  }

  onSubmit() {
    console.log(this.recipeDetailForm.value)
  }

  private initializeRecipeDetailForm() {
    let instructionsArray = this.formBuilder.array([])
    let ingredientsArray = this.formBuilder.array([])

    for (let instruction of this.recipe.instructions) {
      instructionsArray.push(
        this.formBuilder.group({
          instruction: this.formBuilder.control(instruction, [Validators.required])
        })
      )
    }

    for (let ingredient of this.recipe.ingredients) {
      ingredientsArray.push(
        this.formBuilder.group({
          name: this.formBuilder.control(ingredient.name, [Validators.required]),
          quantity: this.formBuilder.control(ingredient.quantity, [Validators.required])
        })
      )
    }

    this.recipeDetailForm = this.formBuilder.group({
      name: [this.recipe.name, [Validators.required]],
      servings: [this.recipe.servings, [Validators.required, Validators.pattern("^[1-9][0-9]?$")]],
      description: [this.recipe.description],
      notes: [this.recipe.notes],
      instructions: instructionsArray,
      ingredients: ingredientsArray
    })
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
  get instructions() {
    return <FormArray>this.recipeDetailForm.get("instructions")
  }
  get ingredients() {
    return <FormArray>this.recipeDetailForm.get("ingredients")
  }
}
