import { Component, OnInit } from '@angular/core';
import { Model } from '../../models/interfaces/model.interface';
import { ModelService } from '../../models/service/models.service';
import { SelectedBrandService } from '../../shared/services/selected-brand.service';

@Component({
  selector: 'app-models-page',
  templateUrl: './model-selection.component.html',
})
export class ModelSelectionComponent implements OnInit {
  models: Model[] = [];
  loading = false;

  constructor(
    public modelService: ModelService,
    private selectedBrandService: SelectedBrandService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    
    this.selectedBrandService.selectedBrand.subscribe((brandId: number | null) => {
      console.log('Recibido brandId en ModelSelectionComponent', brandId);
      if (brandId === null) {
        console.error('brandId es nulo');
        return;
      }

      this.modelService.getModelsByBrand(brandId).subscribe((models: Model[]) => {
        this.models = models;
        console.log(this.models);
        this.loading = false;
      });
    });
  }
}