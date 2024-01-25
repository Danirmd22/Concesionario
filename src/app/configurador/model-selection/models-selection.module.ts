import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelSelectionComponent } from './model-selection.component';
import { SelectedBrandService } from '../../shared/services/selected-brand.service';

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
  providers: [
    SelectedBrandService
  ]
})
export class ModelsSelectionModule {}
