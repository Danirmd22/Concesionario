import { Component } from '@angular/core';
import { BrandService } from './service/brands.service';

@Component({
  selector: 'app-brand-selection',
  templateUrl: './brand-selection.component.html',
})
export class BrandSelectionComponent {
  constructor(
    public brandsService: BrandService,
  ) {}

  // En tu componente de selección de marca
  onBrandSelected(idMarca: number) {
    console.log('idMarca', idMarca);
    if (idMarca === null) {
      console.error('idMarca es nulo');
      return;
    }
  }
}