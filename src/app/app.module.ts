import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ContadorComponent} from "./contador/contador.component";
import {HeroesModule} from "./heroes/heroes.module";

@NgModule({
  declarations: [ // Para colocar componentes
    AppComponent,
    ContadorComponent
  ],
  imports: [ // Para importar modulos
    BrowserModule,
    HeroesModule
  ],
  providers: [], // Para colocar servicios
  bootstrap: [AppComponent]
})
export class AppModule {
}
