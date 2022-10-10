import {Component} from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  agregar() {
    //$event.preventDefault(); // Evita el refresh del formulario || Con ngSubmit no es necesario

    console.log('Esta es una prueba');
  }
}
