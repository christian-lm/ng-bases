import {Injectable} from "@angular/core";
import {Personaje} from "../interfaces/dbz.interface";

// Decorador de un servicio
@Injectable()
export class DbzService {

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegetta',
      poder: 8500
    },
  ];

  get personajes(): Personaje[] {
    return [...this._personajes]; // Los ... y el get en un campo privado rompe la referencia de JS
  }

  constructor() {
    console.log('Servicio inicializado');
  }
}
