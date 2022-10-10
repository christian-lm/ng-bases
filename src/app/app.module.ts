import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ContadorComponent} from "./contador/contador.component";
import {HeroeComponent} from "./heroes/heroe/heroe.component";
import {ListadoComponent} from './heroes/listado/listado.component';

@NgModule({
  declarations: [ // Para colocar componentes
    AppComponent,
    ContadorComponent,
    HeroeComponent,
    ListadoComponent
  ],
  imports: [ // Para colocar modulos
    BrowserModule
  ],
  providers: [], // Para colocar servicios
  bootstrap: [AppComponent]
})
export class AppModule {
}
