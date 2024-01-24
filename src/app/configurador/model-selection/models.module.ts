import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelSelectionComponent } from './model-selection.component';

@NgModule({
  declarations: [
    ModelSelectionComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModelSelectionComponent,
  ],
})
export class ModelsModule {}
