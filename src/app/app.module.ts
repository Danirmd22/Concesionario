import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandsModule } from './configurador/brand-selection/brands.module';
import { BrandService } from './configurador/brand-selection/service/brands.service';
import { ModelsModule } from './models/models.module';
import { ModelService } from './models/service/models.service';
import { ModelsSelectionModule } from './configurador/model-selection/models-selection.module';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';

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
    HttpClientModule

  ],
  exports: [
    SharedModule,
    BrandsModule,
    ModelsModule,
    ModelsSelectionModule,
  ],
  providers: [BrandService, ModelService],
  bootstrap: [AppComponent],
})
export class AppModule { }
