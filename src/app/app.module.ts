import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrandsModule } from './configurador/brand-selection/brands.module';
import { BrandService } from './configurador/brand-selection/service/brands.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrandsModule,
    HttpClientModule

  ],
  providers: [BrandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
