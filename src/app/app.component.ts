import { Component } from '@angular/core';

//@Component é o decrator de componente que define os metadados
//os metadados incluem o model que apresenta a visualização gerenciada por este component
//decorator é uma função que adiciona metadados a uma classe, seus membros e seus argumentos de métodos
//como um decorator é uma função, sempre adicionamos parenteses,  passamos um objeto para a
//a função do componente conforme indicado pelas chaves.
//uma diretiva é simplesmente uma tag personalizada. ex: pm-root
@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})
//a classe define as propriedade e métodos necessários para a nossa view
//uma classe é uma construção que nos permite criar um tipo com propriedade
//que definem os elementos de dados e métodos que fornecem funcionalidades
//a key word export é responsável por tornar a classe disponível por outros componentes do aplicativo
//nomes de classes são substantivos
//nomes de métodos são verbos
//uma classe se torna um componente angular quando fornecemos metadados de componente
//o angular precisa desses metadados para entender como instanciar o componente
//construir a view w interagir com o component,
export class AppComponent {
  pageTitle:string = 'Acme Product Managment';
}
