import {Component, Input} from '@angular/core';
import {Personaje} from "../interfaces/dbz.interface";
import {DbzService} from "../services/dbz.service";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() personajeNuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  constructor(private dbzService: DbzService) {
  }

  // --> El output es un decorador para exportar eventos de hijo a padre (contrario a @Input)
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  agregar() {
    // $event.preventDefault(); // Evita el refresh del formulario || --> Con ngSubmit no es necesario
    // this.onNuevoPersonaje.emit(this.personajeNuevo); // --> Enviamos el personaje nuevo al padre

    // Comprobacion de longitud
    if (this.personajeNuevo.nombre.trim().length === 0) {
      return;
    }

    // Se llama al servicio para crear un personaje
    this.dbzService.agregarPersonaje(this.personajeNuevo);

    // Se setea a blanco
    this.personajeNuevo = {
      nombre: '',
      poder: 0
    };
  }

}
