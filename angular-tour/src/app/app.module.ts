import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// para hacer lo de la casilla tengo que importar el modulo
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DetallesHeroeComponent } from './detalles-heroe/detalles-heroe.component';
import { MensajesComponent } from './mensajes/mensajes.component';

@NgModule({
  declarations: [AppComponent, HeroesComponent, DetallesHeroeComponent, MensajesComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
