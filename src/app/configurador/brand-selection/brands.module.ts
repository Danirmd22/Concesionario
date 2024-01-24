import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandSelectionComponent } from './brand-selection.component';
import { CardListComponent } from './components/card-list/card-list.component';



@NgModule({
  declarations: [
    BrandSelectionComponent,
    CardListComponent
  ],
  imports: [
    CommonModule


  ],
  exports:[
    BrandSelectionComponent,
    CardListComponent
  ]
})
export class BrandsModule {}
