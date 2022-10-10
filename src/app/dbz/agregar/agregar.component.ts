import {Component, Input} from '@angular/core';
import {Personaje} from "../interfaces/dbz.interface";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() listaPersonajes: Personaje[] = [];
  @Input() personajeNuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  agregar() {
    //$event.preventDefault(); // Evita el refresh del formulario || Con ngSubmit no es necesario

    // Comprobacion de longitud
    if (this.personajeNuevo.nombre.trim().length === 0) {
      return;
    }

    console.log(this.personajeNuevo);

    // Se añade el personaje nuevo a la lista
    this.listaPersonajes.push(this.personajeNuevo);

    // Se setea a blanco
    this.personajeNuevo = {
      nombre: '',
      poder: 0
    };

    console.log(this.listaPersonajes);
  }

}
