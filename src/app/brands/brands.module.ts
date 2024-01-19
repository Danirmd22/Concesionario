import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandPageComponent } from './brand-page/brand-page.component';
import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';

@NgModule({
  declarations: [
    BrandPageComponent,
    CardComponent,
    CardListComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BrandPageComponent
  ]
})
export class BrandsModule { }
