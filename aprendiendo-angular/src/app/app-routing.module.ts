import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { CursosComponent } from './cursos/cursos.component';
import { ExternoComponent } from './externo/externo.component';
import { HomeComponent } from './home/home.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'zapatillas', component:ZapatillasComponent},
  {path:'videojuego', component:VideojuegoComponent},
  {path:'cursos', component:CursosComponent},
  {path:'cursos/:nombre/:followers', component:CursosComponent},
  {path:'externo', component:ExternoComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
