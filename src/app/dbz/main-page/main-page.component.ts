import {Component} from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegetta',
      poder: 8500
    },
  ];

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregar() {
    //$event.preventDefault(); // Evita el refresh del formulario || Con ngSubmit no es necesario

    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    console.log(this.nuevo);

    this.personajes.push(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
