import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Model } from '../../models/interfaces/model.interface';

@Injectable({
    providedIn: 'root',
})
export class SelectedBrandService {
    private modelsSource = new BehaviorSubject<Model[]>([]);
    currentModels = this.modelsSource.asObservable();

    constructor() {}

    changeModels(models: Model[]) {
        this.modelsSource.next(models);
    }
}
