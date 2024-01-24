import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrandsModule } from './configurador/brand-selection/brands.module';
import { BrandService } from './configurador/brand-selection/service/brands.service';
import { HttpClientModule } from '@angular/common/http';
import { ModelsModule } from './configurador/model-selection/models.module';
import { ModelService } from './configurador/model-selection/service/models.service';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrandsModule,
    ModelsModule,
    HttpClientModule

  ],
  exports: [
    SharedModule,
    BrandsModule,
    ModelsModule
  ],
  providers: [BrandService, ModelService],
  bootstrap: [AppComponent],
})
export class AppModule { }
