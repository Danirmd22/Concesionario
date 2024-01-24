import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguradorComponent } from './configurador/configurador.component';
import { ModelsComponent } from './models/models.component';

const routes: Routes = [
  { path: 'configurador', component: ConfiguradorComponent },
  { path: 'modelos', component: ModelsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
