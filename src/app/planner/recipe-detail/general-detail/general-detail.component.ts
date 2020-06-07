import { Component, OnInit } from "@angular/core"
import { FormGroup, FormBuilder, Validators } from "@angular/forms"

@Component({
  selector: "app-general-detail",
  templateUrl: "./general-detail.component.html",
  styleUrls: ["./general-detail.component.scss"],
})
export class GeneralDetailComponent implements OnInit {
  recipeDetailForm: FormGroup

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.recipeDetailForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      servings: [null, [Validators.required, Validators.pattern("^[1-9][0-9]?$")]],
      description: [null],
      instructions: [null],
      notes: [null],
    })
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
