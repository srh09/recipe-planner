import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlannerRoutingModule } from './planner-routing.module'
import { PlannerPageComponent } from './planner-page/planner-page.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from "@angular/cdk/drag-drop";
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { DropzoneDirective } from './directives/dropzone.directive';
import { FileUploadComponent } from './file-upload/file-upload.component';



@NgModule({
  declarations: [PlannerPageComponent, RecipeDetailComponent, DropzoneDirective, FileUploadComponent],
  imports: [
    CommonModule,
    PlannerRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    DragDropModule
  ]
})
export class PlannerModule { }
