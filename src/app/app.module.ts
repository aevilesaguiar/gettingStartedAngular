import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ConvertToSpacesPipe } from './product-list/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './product-list/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';


//identificamos a classe como um módulo anexando o decorator @NgModule e passando os
//metadados, para os necorator NgModule, as propriedade são matrizes
//
@NgModule({
  //na matriz de declarações, deefinimos quais dos nossos componentes pertencem a este módulo
  //
  declarations: [
    AppComponent,
    ProductListComponent,
   WelcomeComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, RouterModule.forRoot([
      { path:'products', component:ProductListComponent  },
      { path:'products/id', component:ProductDetailComponent  },
      { path:'welcome', component:WelcomeComponent  },
      { path:'', redirectTo: 'welcome', pathMatch:'full'  },
      { path:'**', redirectTo: 'welcome', pathMatch:'full' }
    ])
  ],
  //a matriz bootstrap define o componente de inicialização do aplicativo
  //que é o nosso AppComponent
  bootstrap: [AppComponent]
})
//definimos um módulo angular como uma classe
export class AppModule { }
