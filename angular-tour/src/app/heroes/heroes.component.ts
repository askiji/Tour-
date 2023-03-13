import { Component, OnInit } from '@angular/core';
import { Heroe } from '../Heroe';
import { HEROES } from '../mock-heroes';
import { HeroeService } from '../heroe.service';
import { MensajeService } from '../mensaje.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroes: Heroe[] = [];
  heroeSeleccionado?: Heroe;
  constructor(
    private heroeService: HeroeService,
    private mensajeService: MensajeService
  ) {}
  enSeleccion(heroe: Heroe): void {
    this.heroeSeleccionado = heroe;
    // este es el texto que se me añade
    this.mensajeService.add(
      `HeroesComponent: Selected heroe name=${heroe.name}`
    );

    //alert(this.heroeSeleccionado.name);
  }
  getHeroes(): void {
    // esto es lo de asincrono que no entiendo nada
    this.heroeService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
