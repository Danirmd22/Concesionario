import { Component, OnInit } from '@angular/core';
import { Model } from '../../models/interfaces/model.interface';
import { SelectedBrandService } from '../services/selected-brand.service';
import { SelectedModelService } from '../services/selected-model.service';

@Component({
  selector: 'app-models-page',
  templateUrl: './model-selection.component.html',
})
export class ModelSelectionComponent implements OnInit {
  models: Model[] = [];
  selectBrand: string = '';
  loading = false;
  selectedModelId: number | null = null;


  constructor(private selectedBrandService: SelectedBrandService, private selectedModelService: SelectedModelService) {}

  getSelectedModelId(): number {
    const selectedModel = this.selectedModelService.getSelectedModel();
    return selectedModel ? selectedModel.id : 0;
  }

  onModelClick(model: Model) {
    this.selectedModelService.changeModel(model);
    this.selectedModelId = model.id;
  }

  ngOnInit() {
    this.selectedBrandService.currentModels.subscribe((models) => {
      this.models = models;
    });
  }
}
