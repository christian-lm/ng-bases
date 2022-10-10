import {Injectable} from "@angular/core";

// Decorador de un servicio
@Injectable()
export class DbzService {

  constructor() {
    console.log('Servicio inicializado');
  }
}
