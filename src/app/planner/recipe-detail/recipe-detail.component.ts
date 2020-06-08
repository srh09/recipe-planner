import { Component, OnInit } from "@angular/core"
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from "@angular/forms"
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout"

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.scss"],
})
export class RecipeDetailComponent implements OnInit {
  recipeDetailForm: FormGroup

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.recipeDetailForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      servings: [null, [Validators.required, Validators.pattern("^[1-9][0-9]?$")]],
      description: [null],
      instructions: [[]],
      notes: [null],
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
  get instructions() {
    return this.recipeDetailForm.get("instructions")
  }
  get notes() {
    return this.recipeDetailForm.get("notes")
  }
}
