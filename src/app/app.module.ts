import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandsModule } from './configurador/brand-selection/brands.module';
import { BrandService } from './configurador/brand-selection/service/brands.service';
import { ModelsModule } from './models/models.module';
import { ModelService } from './models/service/models.service';
import { SelectedBrandService } from './configurador/services/selected-brand.service';
import { ModelsSelectionModule } from './configurador/model-selection/models-selection.module';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    SharedModule,
    BrandsModule,
    ModelsModule,
    ModelsSelectionModule,
    HttpClientModule,
    BrowserAnimationsModule

  ],
  exports: [
    SharedModule,
    BrandsModule,
    ModelsModule,
    ModelsSelectionModule,
  ],
  providers: [BrandService, ModelService, SelectedBrandService ,{ provide: LOCALE_ID, useValue: 'es-ES' }],
  bootstrap: [AppComponent],
})
export class AppModule { }
