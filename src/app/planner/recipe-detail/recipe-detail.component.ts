import { Component, OnInit } from "@angular/core"
import { FormGroup, Validators, FormBuilder, FormArray } from "@angular/forms"
import { RecipeService } from "src/app/services/recipe.service"
import { Recipe } from "src/app/models/recipe.model"
import { ActivatedRoute, Params } from "@angular/router"

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.scss"]
})
export class RecipeDetailComponent implements OnInit {
  isEditMode: boolean
  rIndex: number
  recipe: Recipe
  recipeDetailForm: FormGroup

  constructor(private formBuilder: FormBuilder, private recipeService: RecipeService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.isEditMode = params["rIndex"] != null
      this.rIndex = +params["rIndex"]
    })
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
        quantity: this.formBuilder.control(null, [Validators.required]),
        units: this.formBuilder.control(null),
        preparationMethod: this.formBuilder.control(null)
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
    if (this.isEditMode) {
      this.initEditForm(this.rIndex)
    } else {
      this.initCreateForm()
    }
  }

  private initEditForm(rIndex: number) {
    this.recipe = this.recipeService.getRecipe(rIndex)
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
          quantity: this.formBuilder.control(ingredient.quantity, [Validators.required]),
          units: this.formBuilder.control(ingredient.units),
          preparationMethod: this.formBuilder.control(ingredient.preparationMethod)
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

  private initCreateForm() {
    let instructionsArray = this.formBuilder.array([])
    let ingredientsArray = this.formBuilder.array([])

    this.recipeDetailForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      servings: [null, [Validators.required, Validators.pattern("^[1-9][0-9]?$")]],
      description: [null],
      notes: [null],
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
