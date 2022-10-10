import {NgModule} from '@angular/core'
import {ContadorComponent} from "./contador/contador.component";

@NgModule({
  declarations: [ // Componentes, pipes... del modulo || Solo será visible para este módulo
    ContadorComponent
  ],
  exports: [ // Componentes, pipes... que quiero que sean públicos para la app
    ContadorComponent
  ],
  imports: [ // Importacion de modulos
  ]
})
export class ContadorModule {

}
