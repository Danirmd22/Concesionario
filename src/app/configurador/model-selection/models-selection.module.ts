import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
export class ModelsSelectionModule {}
