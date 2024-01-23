import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { FormStateService } from './service/formStateService.service';
import { BrandSelectionComponent } from './brand-selection/brand-selection.component';
import { ModelSelectionComponent } from './model-selection/model-selection.component';
// ... importa los demás componentes aquí

@Component({
  selector: 'app-configurador',
  template: `
    <ng-container #container></ng-container>
    <button (click)="previous()">Anterior</button>
    <button (click)="next()">Siguiente</button>
  `,
})
export class ConfiguradorComponent {
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  private components = [
    BrandSelectionComponent,
    ModelSelectionComponent,
    // ... lista los demás componentes aquí
  ];

  constructor(
    private formState: FormStateService,
    private resolver: ComponentFactoryResolver
  ) {
    this.formState.step$.subscribe(step => {
      this.container.clear();
      const factory = this.resolver.resolveComponentFactory(this.components[step]);
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