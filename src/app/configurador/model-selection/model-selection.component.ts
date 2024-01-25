import { Component, OnInit } from '@angular/core';
import { Model } from '../../models/interfaces/model.interface';
import { SelectedBrandService } from '../services/selected-brand.service';

@Component({
  selector: 'app-models-page',
  templateUrl: './model-selection.component.html',
})
export class ModelSelectionComponent implements OnInit {
  models: Model[] = [];
  selectBrand: string = '';
  loading = false;

  constructor(private selectedBrandService: SelectedBrandService) {}

  ngOnInit() {
    this.selectedBrandService.currentModels.subscribe((models) => {
      this.models = models;
    });
  }
}
