import { Component } from '@angular/core';
import { BrandService } from './service/brands.service';
@Component({
  selector: 'app-brand-selection',
  templateUrl: './brand-selection.component.html',
})
export class BrandSelectionComponent {

  constructor(public brandsService: BrandService) {}
}
