import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Personaje} from "../interfaces/dbz.interface";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() personajeNuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  // El output es un decorador para exportar eventos de hijo a padre (contrario a @Input)
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  agregar() {
    //$event.preventDefault(); // Evita el refresh del formulario || Con ngSubmit no es necesario

    // Comprobacion de longitud
    if (this.personajeNuevo.nombre.trim().length === 0) {
      return;
    }

    console.log(this.personajeNuevo);
    this.onNuevoPersonaje.emit(this.personajeNuevo); // Enviamos el personaje nuevo al padre

    // Se setea a blanco
    this.personajeNuevo = {
      nombre: '',
      poder: 0
    };
  }

}
