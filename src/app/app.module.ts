import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './product-list/product.module';


//identificamos a classe como um módulo anexando o decorator @NgModule e passando os
//metadados, para os necorator NgModule, as propriedade são matrizes
//
@NgModule({
  //na matriz de declarações, deefinimos quais dos nossos componentes pertencem a este módulo
  //
  declarations: [
    AppComponent,
    WelcomeComponent,


  ],
  imports: [
    BrowserModule, //registra provedores de serviços de aplicativos criticos, importa e exporta commumModules que declarara diretivas como ngIf e ngFor
    HttpClientModule,//provedor de serviços angular HttpClient
    RouterModule.forRoot([

      { path:'welcome', component:WelcomeComponent  },
      { path:'', redirectTo: 'welcome', pathMatch:'full'  },
      { path:'**', redirectTo: 'welcome', pathMatch:'full' }
    ]), ProductModule
  ],
  //a matriz bootstrap define o componente de inicialização do aplicativo
  //que é o nosso AppComponent
  bootstrap: [AppComponent]
})
//definimos um módulo angular como uma classe
export class AppModule { }
