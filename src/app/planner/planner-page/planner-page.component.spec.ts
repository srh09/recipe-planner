import { async, ComponentFixture, TestBed } from "@angular/core/testing"

import { PlannerPageComponent } from "./planner-page.component"

describe("PlannerPageComponent", () => {
  let component: PlannerPageComponent
  let fixture: ComponentFixture<PlannerPageComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlannerPageComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
