import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormStateService {
  private _step = new BehaviorSubject<number>(0);
  step$ = this._step.asObservable();

  private currentStep = -1;
  private maxSteps = 3;

  constructor() {
    // Emitir el valor inicial
    this._step.next(0);
  }

  nextStep() {
    if (this.currentStep < this.maxSteps) {
      this.currentStep++;
      this._step.next(this.currentStep); // Aquí está la corrección
    }
  }

  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
      this._step.next(this.currentStep); // Aquí está la corrección
    }
  }
}