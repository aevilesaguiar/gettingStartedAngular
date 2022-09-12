- 1 Course Overview [ok]
- 2 Introduction[ok]
- 3 First Things First[ok]
- 4 Introduction to Components[ok]
- 5 Templates, Interpolation, and Directives
- 6 Data Binding & Pipes
- 7 More on Components
- 8 Building Nested Components
- 9 Services and Dependency Injection
- 10 Retrieving Data Using HTTP
- 11 Navigation and Routing Basics
- 12 Navigation and Routing Additional Techniques
- 13 Angular Modules
- 14 Building, Testing, and Deploying with the CLI
- 15 Final Words
Angular: Getting Started
By Deborah Kurata

# Apm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Bootstraping

Processo de autoinicialização de carregamento  contínuo.
Informamos ao angular para carregar nosso componente raiz, por meio do processo de bootstraping.


Um aplicativo Angular é chamado de SPA( SIngle Page Application)

## módulos Angular

Os módulos Angular nos ajudam a organizar o aplicativo em blocos de funcionalidade
e fornecem os limites dentro do nosso aplicativo. Eles também fornecem um ambiente
de resolução de modelo.

Pode-se pensar em módulos angular como um arquivo de projeto que faz referencia a todas as partes componentes do aplicativo


##  Templates , Interpolation e Diretivas

O angular nos dá Data Binding(vinculação de dados) para que possamos exibir informações facilmente e responder as ações do usuário.
Com as diretivas , adicionamos lógica ao nosso html como instruções if e loops for.
E com os componentes criamos fragmentos de interface de usuario aninhados

COMPONENTE= TEMPLATE(MODEL) + CLASS(Properties e Methods)+METADATA

## Definindo um template em um componente

inline Template:
"<h1>{{pageTitle}}</h1>"

inline Template: podemos definir um modelo em linha com uma string de várias linhas

template:`
<div>
<h1>{{PageTitle}}</h1>
<div>
My First Component
</div>
</div>

`
linked Template:
templateUrl:
"./product-list.component.html'


## Instalação  de libs

bootstrap e fontawesome
npm install bootstrap font-awesome


- Incluir no arquivo style.css as importações


## Binding


O binding  coordena a comunicação entre a classe de componentes(ex: app.component.ts) e seu modelo(html), e geralmente envolve a passagem de dados. Podemos fornecer valores da classe para o modelo para exibição.E o modelo gera eventos para passar as ações(metodos) do usuário ou inseridos pelo o usuario de volta para a classe. A sintaxe de ligação é sempre definida no modelo(template).


Primeiramente vamos falar de interpolation Ex: <h1>{{ pageTitle }}</h1>

ele pode estar vinculado há uma propriedade na classe do component.

Ex:

export class AppComponent{
  pageTitle:string='Acme Product Managment';
}


Interpolation é uma vinculação unidimensional da propriedade da classe ao modelo.
Podemos usar interpolation para inserir strings{{'Title'+pageTitle}} fazer calculos{{2*20+1}}.
Podemos também usar interpolation com atribuições de propriedade de elemento como no exemplo abaixo:
<h1 innerText={{pageTitle}}> </h1>

A sintaxe entre as chaves de interpolation é chamada de Template Expression. Angular avalia essa expressõa, usando o componente como contexto.
Portanto, o angular analisa o componente para obter valores de propriedades ou para chamar métodos.
Angular converte o resultado da expressão do modelo em uma string e atribui essa string a um elemento ou propriesade de diretiva.

## Directiva

Uma diretiva pode ser pensada como um elemento ou atributo html. Podemos construir nossas próprias diretivas personalizadas ou 
usar as diretivas integradas do angular.

Diretivas angular integradas que veremos são as estruturais:
*ngIf: if logic
*ngFor: For loops 

Uma diretiva estrutural modifica a estrutura ou layout de uma visualização adicionando ou removendo ou manipulando
elementos e seus filhos. Eles nos ajudam a fortalecer nosso html com lógica if e loops for.
O esterisco do lado marca a diretiva como uma diretiva estrutural.


O ngif é uma diretiva estrutural que remove ou recria uma parte da arvore do modelo de objeto do documento com base em uma expressão.
Ex: 
<div class='table-responsive>
<table class='table' *ngIf='products.length'>
<thead>...
</thead>
<tbody>...
</tbody>
</table>
</div>

ngif é uma ótima maneira de exibir conteúdo opcionalmente. No exemplo acima products.lenth fornece o numero de elementos na matriz.
Se a matriz de produtos conter alguns produtos, a tabela será exibida products.length evaluates to true. Se estiver vazia  products.length evaluates to false o cabeçalho das colunas e tuso mais será removido do DOM e não aparecem na UI.

Como o compilador angular encontrará a diretiva ngIf? através do BrowserModule , pois ele expõe diretivas ngIf e ngFor.

ngFor repete uma parte da árvore DOM uma vez para cada item em uma lista iterável. Definimos um bloco de HTML que define como queremos exibir um único item e dizemos ao angular para usar este bloco para exibir cada item da lista.
Por exemplo se quisermos exibir cada produto em uma linha da tabela, definimos uma linha da tabela e seus elementos de dados da tabela filho
Esse elemento de linha da tabela e seus filhos são então repetidos para cada produto na lista de produtos.
A palavra-chave let aqui cria uma variável chamada produto.
Podemos fazer referência a essa variável em qualquer lugar neste elemento.

 <tr *ngFor='let product of products'>
            <td></td>

            <td>{{ product.name }}</td>
            <td>{{ product.code }}</td>
            <td>{{ product.price }}</td>

Por que a sintaxe ngFor é um product of products e não um produt of products?
          
for .. of vs for ...in

O raciocinio tem a ver com ES 2015 para loops. poi ele tem um loop for ...of e for... in loop

O loop for...of é semelhante ao foreach . Ele itera sobre um objeto iteravel, como uma matriz.

Ex: let nicknames= ['di','boo','pipi'];
for(let nickname of nicknames){
  console.log(nickname)
}
Result: di, boo, pipi

for ...in itera sobre as propriedades de um objeto. Ou seja se trabalhamos em cima da mesma matriz, os indices da matriz são propriedades enumeráveis com numeros inteiros
Ex: let nicknames= ['di','boo','pipi'];
for(let nickname in nicknames){
  console.log(nickname)
}
Result: 0,1,2

## Check list
1 - usamos a diretiva como um elemento no model para qualquer outro componente
Usamos o seletor de componente de diretiva como o nome da diretiva.Ex:selector:'pm-products'

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle:string = 'Acme Product Managment';
}


@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


2 - declaramos o componente para que esteja disponivel para qualquer modelo associado no arquivo de app,module.ts. em declarations

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
  ],

  imports: [
    BrowserModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

## Property Binding

O property Binding nos permite definir uma propriedade de um elemento com o valor de uma expressão de model.

element Property [src]
template Expression:'product.imageUrl'
ex: <img [src]='product.imageUrl'>

para comparação temos uma ligação semelhante usando interpolation
<img src={{ product.imageURL}}> 

O property Binding permite associação de dois tipos diferentes de strings, com um valor booleano true/false
<input type='text' [disabled]='isDisabled'>

A interpolation sempre atribui uma string, mas se você precisa incluir o template Expression como parte de uma expressão  como no modelo abaixo:
<img src='http:/myImages.org/{{ product.imageURL}}'>  você pode usar Interpolation. Assim como Interpolation property Bindind é uma forma do componente para a propriedade do elemento HTML. Ele efetivamente nos permite controlar o DOM do nosso modelo a partir do nosso componente

## Event Binding

Um componente escuta as ações de usuario usando o Event Binding(associação de eventos).
<button (click) = 'toggleImage()>  

event: (click)
A associação de eventos nos permite conectar um evento a um método no componente. Exemplo está o elemento de botão HTML. fOI VINVULADO O EVENTO DE CLIQUE DO BOTÃO AO MÉTODO

Lista de eventos padrão: https://developer.mozilla.org/en-US/docs/Web/Events


## Two way binding

Possui uma ligação bidirecional com a diretiva ngModel. Colocamos ngModel entre colchetes para indicar um property Binding para o elemento de entrada e parenteses para indicar o event binding  para enviar uma notificação do texto inserido pelo o usuario de volta ao componente. Atribuimos esta diretiva a um component property.
Two way binding é chamado de Banana in a box[()]


## Pipes

Os pipes transformam as properties binding antes de serem exibidas. Para que possamos alterar os valores das propriedades para torná-los mais amigáveis ao usuário ou mais apropriadas ao local. O angular promete alguns pipes internos para formatar valores. Como data, numero  decimal, porcentagem,moeda, maiuscula, minuscula e assim por diante.
O angular também fornece alguns pipes para trabalhar com objetos como o pipe json para exibir o conteúdo de um objeto como uma string JSON, o que é util no debbuging.

Também podemos contruir nossos pipes personalizados.
Ex:

produto em letra minuscula-> {{product.productCode | lowercase}}

produto em letra maiuscula-> {{product.productCode | uppercase}}

podemos usar pipes em property Binding -> <img [src]='product.ImageUrl' [title]='producr.productName | uppercase'>

transformar o preco em moeda ->{{ product.price | currency | lowercase}}

alguns pipes suportam parametros-> {{ product.price | currency:'USD':'symbol':'1.2-2'}}


## Data binding

O data binding torna mais fácil exibir as propriedades do component e definir as propriedades do elemento DOM de nosso componente para controlar a melhor visualização.
O componente pode escutar e responder ea eventos, como um clique de botão.

E com two way binding podemos processar a entrada do usuario para uma experiencia interativa.

Existem 4 tipos  básicos de Bindings no angular.  

 ____________     Interpolation{{ pageTitle }}                          ___________________
|            |   <---------------------------------------------------  |                   |
|            | insere strings interpoladas no texto entre os elementos |                   |
|            | HTML ou atribui propriedades aos elementos.             |                   |
|            |                                                         |                   |
|            |  Property Binding:<img>[src]='product.imageUrl'>        |                   |
|            |  <---------------------------------------------------   |                   |
|     DOM    |  define uma propriedade de elemento HTML com o valor    |                   |
|            |  de uma expressão de modelo, as propriedades devem ser  |                   |  
|            |  colocadas entre colchetes e a expressão entre aspas.   |   COMPONENT       |
|            |                                                         |                   |
|            | Event Binding: <button (click) = 'toggleImage()'>       |                   | 
|            |   ----------------------------------------------------> |                   |
|            |  a associação de eventos escuta eventos da interface do |                   |
|            |  usuário e executa um método de componente quando o     |                   |
|            |  evento ocorre. O nome do evento deve ser colocado      |                   |
|            | entre parenteses e o metodo a ser chamado deve ser      |                   |
|            | colocado entre aspas                                    |                   |
|            |                                                         |                   |
|            | Two way binding:<input[(ngModel)]='listFilter'>         |                   |
|            | <-----------------------------------------------------> |                   |
|            | exibe uma propriedade de componente e atualiza essa     |                   |
|            | essa propriedade quando o usuario faz uma alteração em  |                   |
|            |  um elemento de entrada                                 |                   |
|____________|                                                         |___________________|

Ao usar ngMode: defina ngModel dentro de [()] para ligação bidirecional
Certifique-se de adicionar FormsModule do pacote formulários Angular ao array de importações de um módulo Angular apropriado.Isso garante que a diretiva ngModel esteja disponível para qualquer 
modelo definido em um componente associado a esse modulo. Os dados que temos em nosso componente podem não estar no formato que desejamos para exibição e podemos usar o pipe em um modelo para transformar esses dados em um formato amigável.
