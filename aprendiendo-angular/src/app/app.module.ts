import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';
import { HttpClientModule } from '@angular/common/http'
import { CalculadoraPipe } from './pipes/calculadora.pipe';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent,
    CalculadoraPipe,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
