import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ConvertToSpacesPipe } from './product-list/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';

//identificamos a classe como um módulo anexando o decorator @NgModule e passando os
//metadados, para os necorator NgModule, as propriedade são matrizes
//
@NgModule({
  //na matriz de declarações, deefinimos quais dos nossos componentes pertencem a este módulo
  //
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent

  ],
  //na matriz de importação definimos os módulos externos que queremos disponibilizar para todos
  //aqui importamos o BrowserModule que todo aplicativo de navegador deve importar
  //BrowserModule registra provedores de serviços de aplicaativos importantes
  //como tratamento de erros
  imports: [
    BrowserModule,
    FormsModule
  ],
  //a matriz bootstrap define o componente de inicialização do aplicativo
  //que é o nosso AppComponent
  bootstrap: [AppComponent]
})
//definimos um módulo angular como uma classe
export class AppModule { }
