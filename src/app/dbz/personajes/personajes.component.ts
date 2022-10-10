import {Component} from '@angular/core';
import {DbzService} from "../services/dbz.service";

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  // El @Input es un decorador que dice que vamos a coger la propiedad del padre
  // @Input() listaPersonajes: Personaje[] = [];
  get listaPersonajes() {
    return this.dbzService.personajes;
  }

  constructor(private dbzService: DbzService) {
  }
}
