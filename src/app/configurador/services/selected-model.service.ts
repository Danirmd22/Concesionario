import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Model } from '../../models/interfaces/model.interface';

@Injectable({
  providedIn: 'root'
})
export class SelectedModelService {
  private selectedModel = new BehaviorSubject<Model | null>(null);

  currentModel = this.selectedModel.asObservable();

  changeModel(model: Model) {
    this.selectedModel.next(model);
    if (model) {
      localStorage.setItem('selectedModel', JSON.stringify(model));
    } else {
      localStorage.removeItem('selectedModel');
    }
  }

  getSelectedModel(): Model | null {
    const storedModel = localStorage.getItem('selectedModel');
    return storedModel ? JSON.parse(storedModel) : null;
  }
}