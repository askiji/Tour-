import { Injectable } from '@angular/core';
import { Heroe } from './Heroe';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MensajeService } from './mensaje.service';
@Injectable({
  // esto es donde le meteria donde esta mis datos??
  providedIn: 'root',
})
export class HeroeService {
  constructor(private mensajeService: MensajeService) {}

  // esto es lo de asincrono que no se lo que esta pasando esta en la parte 4 del tutorial
  getHeroes(): Observable<Heroe[]> {
    const heroes = of(HEROES);
    this.mensajeService.add('HeroeService: recogiendo todos los heroes');
    return heroes;
  }
}
