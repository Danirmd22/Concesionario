import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguradorComponent } from './configurador/configurador.component';
import { ModelsComponent } from './models/models.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'configurador', component: ConfiguradorComponent},
  { path: 'modelos', component: ModelsComponent },
  { path: 'registro', component: RegistroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
