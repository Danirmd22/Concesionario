import {
  Component,
  ComponentFactoryResolver,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormStateService } from './service/formStateService.service';
import { BrandSelectionComponent } from './brand-selection/brand-selection.component';
import { ModelSelectionComponent } from './model-selection/model-selection.component';
// ... importa los demás componentes aquí

@Component({
  selector: 'app-configurador',
  templateUrl: './configurador.component.html',
})
export class ConfiguradorComponent {
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  private createComponent(step: number): Type<unknown> {
    switch (step) {
      case 0:
        return BrandSelectionComponent;
      case 1:
        return ModelSelectionComponent;
      default:
        throw new Error(`Invalid step: ${step}`);
    }
  }

  constructor(private formState: FormStateService) {
    this.formState.step$.subscribe((step) => {
      this.container.clear();
      const factory = this.createComponent(step);
      this.container.createComponent(factory);
    });
  }

  next() {
    this.formState.nextStep();
  }

  previous() {
    this.formState.previousStep();
  }
}
