import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SelectedBrandService {
    private selectedBrandSource = new BehaviorSubject<number | null>(null);
    selectedBrand = this.selectedBrandSource.asObservable();

    constructor() {}

    changeSelectedBrand(brandId: number) {
        console.log('Cambiando brandId a', brandId);
        this.selectedBrandSource.next(brandId);
    }
}
