import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Model } from '../../models/interfaces/model.interface';

@Injectable({
    providedIn: 'root',
})
export class SelectedBrandService {
    private modelsSource = new BehaviorSubject<Model[]>([]);
    currentModels = this.modelsSource.asObservable();

    private brandIdSource = new BehaviorSubject<number | null>(null);
    currentBrandId = this.brandIdSource.asObservable();

    constructor() {}

    changeModels(models: Model[]) {
        this.modelsSource.next(models);
    }

    changeBrandId(brandId: number | null) {
        this.brandIdSource.next(brandId);
    }
}