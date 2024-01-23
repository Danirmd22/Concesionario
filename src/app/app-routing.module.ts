import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandPageComponent } from './brands/brand-page/brand-page.component';
import { ModelsPageComponent } from './models/models-page/models-page.component';

const routes: Routes = [
  { path: 'configurador', component: BrandPageComponent },
  { path: 'configurador/modelos', component: ModelsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
