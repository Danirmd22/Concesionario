import {
  Component,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { BrandSelectionComponent } from './brand-selection/brand-selection.component';
import { ModelSelectionComponent } from './model-selection/model-selection.component';
import { FormStateService } from './services/formStateService.service';
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
    this.breadCrubNext();
  }

  previous() {
    this.formState.previousStep();
    this.breadCrubPrevious();
  }

//LOGICA PARA BREAD CRUMB HACIA ADELANTE
  breadCrubNext(){
    var vDom = "a"+this.formState.currentStepFn();
const editDom  = document.getElementById(vDom);
  editDom!.style.color = ("#ece9e1");


  }

//LOGICA PARA BREAD CRUMB HACIA ATRAS

  breadCrubPrevious(){
    var vDom = "a"+(this.formState.currentStepFn()+1);
const editDom  = document.getElementById(vDom);
  editDom!.style.color = ("#98928f");


  }
}


