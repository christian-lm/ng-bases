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

  nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 14000
  }

  agregar() {
    //$event.preventDefault(); // Evita el refresh del formulario || Con ngSubmit no es necesario

    console.log(this.nuevo);
  }

  cambiarNombre(event: any) {
    console.log(event.target.value);
  }
}
