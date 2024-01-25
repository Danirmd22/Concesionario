import { Component } from '@angular/core';
import { BrandService } from './service/brands.service';
import { SelectedBrandService } from '../../shared/services/selected-brand.service';

@Component({
  selector: 'app-brand-selection',
  templateUrl: './brand-selection.component.html',
})
export class BrandSelectionComponent {
  constructor(
    public brandsService: BrandService,
    private selectedBrandService: SelectedBrandService
  ) {}

  // En tu componente de selección de marca
  onBrandSelected(idMarca: number) {
    if (idMarca === null) {
      console.error('idMarca es nulo');
      return;
    }

    this.selectedBrandService.changeSelectedBrand(idMarca);
  }
}