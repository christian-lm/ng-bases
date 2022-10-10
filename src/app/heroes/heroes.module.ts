import {NgModule} from '@angular/core'
import {HeroeComponent} from "./heroe/heroe.component";
import {ListadoComponent} from "./listado/listado.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [ // Componentes, pipes... del modulo || Solo será visible para este modulo
    HeroeComponent,
    ListadoComponent
  ],
  exports: [ // Componentes, pipes... que quiero que sean públicos para la app
    ListadoComponent
  ],
  imports: [ // Importacion de modulos
    CommonModule // Este commonModule importa las directivas como el ngIF o el ngFor
  ]
})
export class HeroesModule {

}
