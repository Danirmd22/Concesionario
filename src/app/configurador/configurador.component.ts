import { Component, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { BrandSelectionComponent } from './brand-selection/brand-selection.component';
import { ModelSelectionComponent } from './model-selection/model-selection.component';
import { FormStateService } from './services/formStateService.service';
import { ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-configurador',
  templateUrl: './configurador.component.html',
})
export class ConfiguradorComponent implements AfterViewInit {
  @ViewChild('botonSiguiente', { static: true }) botonSiguiente!: ElementRef;
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

  // Boton automatico de next
  ngAfterViewInit(): void {
    this.formState.step$.subscribe((step) => {
      Promise.resolve().then(() => {
        this.container.clear();
        const factory = this.createComponent(step);
        this.container.createComponent(factory);
      });
    });

    // Simular un clic en el botón "Siguiente" al cargar la página
    setTimeout(() => {
      this.botonSiguiente.nativeElement.click();
    });
  }

  next() {
    this.formState.nextStep();
    this.breadCrubBtn();
  }

  previous() {
    this.formState.previousStep();
    this.breadCrubBtn();
  }

  currentStep() {
    return this.formState.currentStepFn();
  }

  //LOGICA PARA BREAD CRUMB HACIA ATRAS
  breadCrubBtn() {
    var vDom = 'a' + (this.formState.currentStepFn());
    let numero = this.formState.currentStepFn();

    const editDom = document.getElementById(vDom);

    editDom!.style.color = '#98928f';

    for (let index = 0; index <= numero; index++) {
      var vDom = 'a' + (index);
      const editDom = document.getElementById(vDom);
      editDom!.style.color = '#ece9e1';
      editDom!.classList.value = 'cursor-pointer';
    }
    for (let index = numero + 1; index < 7; index++) {
      var vDom2 = 'a' + (index);
      const editDom = document.getElementById(vDom2);
      editDom!.style.color = '#98928f';
      editDom!.classList.value = 'cursor-not-allowed';
    }


  }

  breadCrubClick(event: any) {
    //recoge el evento
    let id: string = event.target.id;
    //Extrae el numero del id
    const match = id.match(/\d+/);
    if (match) {
      // Convertir el resultado a un número entero
      const numero = parseInt(match[0], 10);
      //compara para hacer modificaciones y q no permita pasos para adelante
      if (numero < (this.formState.currentStepFn())) {

        //Pintar clicks

        for (let index = 0; index <= numero; index++) {
          var vDom = 'a' + (index);
          const editDom = document.getElementById(vDom);
          editDom!.style.color = '#ece9e1';
          editDom!.classList.value = 'cursor-pointer';
            }
        for (let index = numero + 1; index < 7; index++) {
          var vDom2 = 'a' + (index);
          const editDom = document.getElementById(vDom2);
          editDom!.style.color = '#98928f';
          editDom!.classList.value = 'cursor-not-allowed';}
        //Pintar clicks (Esto luego se va quitar cuando funcione steps)
        //LLeva a el step
        this.formState.currentClickfn(numero);

      } else {
        console.error('No puedes navegar hacia adelante');
      }
    }
  }


}
