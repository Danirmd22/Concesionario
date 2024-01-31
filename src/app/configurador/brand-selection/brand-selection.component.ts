import { Component } from '@angular/core';
import { BrandService } from './service/brands.service';
import { SelectedBrandService } from '../services/selected-brand.service';
@Component({
    selector: 'app-brand-selection',
    templateUrl: './brand-selection.component.html',
})

export class BrandSelectionComponent {
    isBrandSelected = false;

    constructor(public brandsService: BrandService, private selectedBrandService: SelectedBrandService) {
        this.selectedBrandService.currentSelectedBrand.subscribe((selectedBrand) => {
            if (selectedBrand) {
                this.onBrandSelected(selectedBrand.id);
            }
        });
    }

    onBrandSelected(idMarca: number) {
    if (idMarca === null) {
        console.error('idMarca es nulo');
        return;
    }

    this.isBrandSelected = true;
    }
}
