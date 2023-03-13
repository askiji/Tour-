import { Component, Input } from '@angular/core';
import { Heroe } from '../Heroe';
@Component({
  selector: 'app-detalles-heroe',
  templateUrl: './detalles-heroe.component.html',
  styleUrls: ['./detalles-heroe.component.css'],
})
export class DetallesHeroeComponent {
  @Input() heroe?: Heroe;
}
