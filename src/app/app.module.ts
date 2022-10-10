import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeroesModule} from "./heroes/heroes.module";
import {ContadorModule} from "./contador/contador.module";

@NgModule({
  declarations: [ // Para colocar componentes
    AppComponent
  ],
  imports: [ // Para importar modulos
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [], // Para colocar servicios
  bootstrap: [AppComponent]
})
export class AppModule {
}
