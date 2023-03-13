import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes/heroes.component';

// esto imagino que son los links a los sitios pero no tnego ni idea de porque aqui que es un sitio que recoge las rutas?

// vale esto es para la /direccion de donde lo voy a mandar en el navegador
const routes: Routes = [{ path: 'heroes', component: HeroesComponent }];

@NgModule({
  // el routermodile ese lo he usado antes pero no me acuerdo para que
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
  // que es esto de delcarations
  declarations: [],
})
export class AppRoutingModule {}
