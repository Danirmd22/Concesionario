import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormStateService {
  private _step = new BehaviorSubject<number>(0);
  step$ = this._step.asObservable();

  nextStep() {
    this._step.next(this._step.value + 1);
  }

  previousStep() {
    if (this._step.value > 0) {
      this._step.next(this._step.value - 1);
    }
  }
}