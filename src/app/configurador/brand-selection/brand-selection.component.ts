import { Component } from '@angular/core';
import { BrandService } from './service/brands.service';

@Component({
    selector: 'app-brand-selection',
    templateUrl: './brand-selection.component.html',
})

export class BrandSelectionComponent {
    isBrandSelected = false;

    constructor(public brandsService: BrandService) {}

    onBrandSelected(idMarca: number) {
    if (idMarca === null) {
        console.error('idMarca es nulo');
        return;
    }

    this.isBrandSelected = true;
    }
}
