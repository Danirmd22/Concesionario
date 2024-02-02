import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Model } from '../../models/interfaces/model.interface';
import { Brand } from '../brand-selection/interfaces/brand.interface';
@Injectable({
    providedIn: 'root',
})
export class SelectedBrandService {
    private modelsSource = new BehaviorSubject<Model[]>([]);
    currentModels = this.modelsSource.asObservable();

    private brandIdSource = new BehaviorSubject<number | null>(null);
    currentBrandId = this.brandIdSource.asObservable();

    private selectedBrandSource = new BehaviorSubject<Brand | null>(null);
    currentSelectedBrand = this.selectedBrandSource.asObservable();

    constructor() {}

    changeModels(models: Model[]) {
        this.modelsSource.next(models);
    }

    changeBrandId(brandId: number | null) {
        this.brandIdSource.next(brandId);
    }

    changeSelectedBrand(brand: Brand | null) {
        this.selectedBrandSource.next(brand);
        if (brand) {
            localStorage.setItem('selectedBrand', JSON.stringify(brand));
        } else {
            localStorage.removeItem('selectedBrand');
        }
    }
    
    getSelectedBrand(): Brand | null {
        const storedBrand = localStorage.getItem('selectedBrand');
        return storedBrand ? JSON.parse(storedBrand) : null;
    }
}