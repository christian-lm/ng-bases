import {Component, Input} from '@angular/core';
import {Personaje} from "../interfaces/dbz.interface";
import {DbzService} from "../services/dbz.service";

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  // El @Input es un decorador que dice que vamos a coger la propiedad del padre
  @Input() listaPersonajes: Personaje[] = [];

  constructor(private dbzService: DbzService) {
  }
}
