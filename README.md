- 1 Course Overview [ok]
- 2 Introduction[ok]
- 3 First Things First[ok]
- 4 Introduction to Components[ok]
- 5 Templates, Interpolation, and Directives[ok]
- 6 Data Binding & Pipes[ok]
- 7 More on Components[ok]
- 8 Building Nested Components[ok]
- 9 Services and Dependency Injection[ok]
- 10 Retrieving Data Using HTTP[ok]
- 11 Navigation and Routing Basics[ok]
- 12 Navigation and Routing Additional Techniques[ok]
- 13 Angular Modules[ok]
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

## Typescripting

Um dos benefícios de usar o typescript é a tipagem forte. Toda propriedade tem um tipo, todo método tem um tipo de retorno e todo parametro tem um tipo. Temos também o exemplo de uma propriedade que não tem nenhum tipo como: products: any[]=[...].

## Tipos personalizados( Strong typing)

Para especificar tipos personalizados , podemos definir uma interface.

Um interface é uma especificação que identifica um conjunto(set) com propriedades e métodos.
Propriedades são os elementos de dados associados a classe, e os métodos executam a lógica necessária a classe.

Existem duas formas de utilizar uma interface:

Usando uma interface para identificar as propriedades como um tipo especifico(As a type)

export interface IProduct{
  productId: number;
  productName: string;
  productCode:string
}

As a type
products: IProduct[]=[];

A segunda maneira de usar uma interface é identificar um conjunto(set) de recursos. Declaramos as propriedades e métodos necessários para implementar um recurso específico. Ou seja apenas declarações , sem códigos.

export interface DoTiming{
  count: number;
  start(index:number):void;
  stop():void;
}
As a feature set (especificamos a interface usando a palavra chave implements, em seguida escrevemos o código para cada propriedade e método definido.)

export class myComponent implements DoTiming{
  count: number=0;
  start(index:number):void{
    ....
  }
  stop(): void{
    .....
  }
}


## Component Lifecycle

Um component tem um ciclo de vida gerenciado pelo o angular.

O lifecycle hook é uma interface fornecida pelo o angular para escrever código que é executado quando ocorre o evento. Ex quando o component é criado e inicializado pela primeira vez. Implementamos o lifeCycle hook onInit e escrevemos o código nesse método para obter nossos dados.

Component LifeCycle Hooks :

OnInit: para executar qualquer inicialização de component após o angular ter inicializado as propriedades vinculadas aos dados.Este é um bom 
lugar para recuperar os dados do modelo de um serviço de backend.

OnChanges: para executar qualquer ação após o angular definir a entrada de dados.

OnDestroy: para realizar qualquer limpeza antes que o angular destrua o component.


## Transformando Dados com Pipes

Building a Custom Pipes

import{ Pipe, PipeTransform } from 'angular/core';

@Pipe({
  name: 'convertToSpaces'
})

export class ConvertToSpacesPipe implements PipeTransform{
  transform(value:string, character: string):string{

    //valor que será convertido productCode



  }
}

TEMPLATE
<td> {{ product.productCode | convertToSpaces: '-' }}</td>


## Getters and Setters

Em JS e , portanto , em TS existem duas maneiras de definir uma propriedade em uma classe.

Podemos declarar um variavel simples para uma propriedade.

amount: number=0;

ou usar getter e setter JS

get amount():number{
return this._amount;
}
set amount(value:number){
  this._amount=value;
}
para definir que a variavel é privada usamos _ underscor


Use um getter e setter sempre que desejar executar o código quando uma propriedade for obtida e definida.

## Arrow function

Arrow function tem uma sintaxe compacta para definir uma função. é mais frequentemente usado ao passar lógica para outra função ou método.

Função classica 

capitalizeName(product: IProduct): string{
  return product.productName.toUpperCase();
}

Arrow Function
(product: IProduct)=>product.productName.toUpperCase();


## Usando um component

Formas de usar um Component e exibir o model do component.
Podemos usá-lo como diretiva, lembrando que diretiva é uma sintaxe personalizada que usamos para ativar nosso HTML.
Directive-> Custom HTML syntax.

Ao usar um componente como uma diretiva usamos o seletor de componente como uma tag HTML personalizada.
<body>
<pm-root></pm-root>
</body>


## Input Properties

Decore uma propriedade de componente com o decorater @Input Sempre que pecisar de dados de entrada de seu container.

## Output Properties

Decore uma propriedade de componente com o decorater @Output Sempre que pecisar emitir eventos e eventuualmente passar dados para o seu container.
Somente propriedades do tipo EventEmmiter devem ser marcadas com o decorator @Output.
Use o argumento generico de EventEmmiter para especificar o tipo dos dados do evento e use a new para criar um novo evento.

  @Output() ratingClicked: EventEmitter<string> =
  new EventEmitter<string>();

Use o componente aninhado como uma diretiva

           <td><pm-star [rating]='product.starRating'
              (ratingClicked)='onRatingClicked($event)'></pm-star></td>

Use property Binding para passar dados ao component aninhado.[rating]
Use event Binding para responder a eventos do component aninhado e use $ event para acessar os dados do evento passado ao component.


## Services e dependencia de Injeção

Construimos Services para incluir a lógica.
Criamos um serviço e usamos injeção de dependencia para injetar esse serviço em qualquer componente que precise dele.

Um service é uma classe com um propósito específico. Geralmente criamos um serviço para implementar a funcionalidade que é independente de qualquer componente específico, para compartilhar dados ou lógica entre componentes. Ou encapsular interações externas , como acesso a dados.
Ao mudar essa responsabilidade do component para um serviço, o código fica mais fácil de testar, debuggar e reutilizar.

A forma ideal para injetar dependencia é instanciá-la no construtor.

Component

constructor(private myService){

}

Dependency Injection(DI)
é um padrão de codificação no qual uma classe recebe instancias dos objetos de que precisa, chamadas de dependencias, de uma fonte externa em vez de criá-los ela mesma.
No angular , essa fonte externa é o injetor Angular .


## Building a Service( criar classe de Serviço)

- Crie a classe de serviço
- Defina os metadados com um decorator e importe o que precisamos. @Injectable()

## quando vc deve registrar seu serviço como um Injector root(raiz) ao invez de um Injector component?

Root Injector-> o registro de serviço como raiz garante que o serviço esteja disponível em todo o aplicativo. Na maioria dos Cenários , será registrado como raiz.

Component Injector: ele ficará disponível apenas para o seu component, a seus componentes filho ou aninhados.

registramos no injectable que ele é um serviço root, ou seja está podemos acessar o serviço de qualquer component ou otro serviço do aplicativo.
@Injectable({
  providedIn: 'root'
})


se quisermos que o serviço esteja disponivel apenas para o componente e seus componentes filhos.



@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[ProductService]
})

## Recuperando dados usando HTTP(Retrieving Data Using HTTP)


A maioria dos aplicativos angular obtem  dados usando HTTP.


## Observables e Extensões Reativas

Extensões reativas para JS ou RxJS é uma biblioteca para compor dados usando uma sequencia de Observables e transformar esses dados usando um conjunto de operadores.

O Angular usa Extensões reativas para trabalhar com dados, especialmente dados assincronos, como solicitações HTTP.


Sincronos vs. Assincronos

Sincronos é real time, ou seja em tempo real.
A comunicação sincrona é como uma chamada telefonica. Você fala , eu imediatamente processo a informação e respondo.
Com dados sincronos, o aplicativo solicita um valor e espera que ele chegue, é semelhante como chamar nosso método getProducts para obter a lista de produtos.

A comunicação assincrona não espera uma resposta imediata. quando mando um email não preciso esperar uma resposta. 
Quando recebo a resposta eu posso decidir quando processá-la.


Do ponto de vista de nossos aplicativos, as solicitações HTTP são assincronas. 

No angular , emitimos a solicitação get usando HTTP, mas o que usamos para configurar as notificações?

Usamos as sequencia de RxJS Observable.

- OBSERVABLE: uma sequencia Observable é ás vezes chamada de Observable stream (fluxo de observable), é uma
coleção de itens ao longo do tempo. Portanto é uma coleção, mas ao contrário de uma matriz, não retém itens.
Em vez disso , os itens emitidos podem ser observados ao longo do tempo.
Um Observable não podemos classificá-los, ou percorré-los.

O que um Observable faz?

Um Observable não faz nada até que se inscreva(subscribe). Quando nos inscrevemos , o Observable começa a emitir notificações.

Existem 3 tipos de notificações:

- next:proxima notificação, que ocorre quando o próximo item é emitido e fornece o item emeitido.
- error: Obsertvable emite uma notificação de erro e fornece as informações do erro o Observable então é concluído e nenhum outro  item é emitido.
- complete: senão houver mais itens a serem emitidos o Observable emite uma notificação completa.

Ou seja após inscrito um Observable emite o próximo erro ou notificações completas.

Observable Pipe
Podemos especificar uma espécie de pipeline usando um conjunto de operadores para transformar cada item emitido.

Os observables tem mais de 100 operadores integrados não fictícios para mapear, filtrar , combinar e transformar dados.


## Forma comum de Usar Observables

Uma maneira comum de usar observables em um aplicativo angular , é primeiro iniciar o Observable(subscribe) com uma assinatura e depois o Pipe para cada item emitido por meio de um conjunto de operadores para modificar ou transformar o item. Em seguida , processamos as notificações do Observable. As tres notificações que o observable emite: nexr, error, complete. Por último paramos o Observable cancelando a inscrição(unsubscribe)

Operadores e métodos Observables que podemos usar para criar Observables, os mesmos podem ser encontrados no pacote RxJS(range, map, filter...)

Usamos a função de criação Observable chamada de range(intervalo) para criar um Observable que emite 10 números começando do 0;
const source$: Observable <number>=range(0,10);

Utilizamos o sufixo dolar para variaveis que referenciam Observables.

Usamos o pipe para canalizar os itens emitidos através de vários operadores. neste exemplo mapeie e filtre
source$.pipe(
  map(x=>x*3),
  filter(x=>x%2===0)
).subscribe(x=>console.log(x));

Subscribing to an Observable
x.subscribe();
x.subscribe(Observer)

O objeto Observer observa o fluxo e responde a três tipos de notificações: next, error e complete.
Usamos o objeto Observer para defiir funções de manipulador que são executadas nessas notificações.


A maneira recomendada de usar http é encapsulá-lo em um serviço como nosso serviço de produto.

  constructor(private http: HttpClient) { }

Depois expô-lo e observá-lo para uso por qualquer componente que precide de dados do produto

  //o serviço de produto retorna um Observable da matriz de produtos
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl)
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

O componente simplesmente se inscreve no observable e em algum momento posterior , obtem os dados ou uma notificação.

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  }

## Checklist

Antes de  podermos usar o serviço HTTP angular , algumas configurações são necessárias:

Precisamos garantir que o provedor de Serviços esteja registrado
no angular arquivo app.module.ts

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
  ->   HttpClientModule
  ],
Esse registro é feito para nós no HttpClientModule.
Portanto tudo o que precisamos fazer é colocar HttpClient Module em nosso aplicativo

Construa um serviço de acesso a dados para envolver as solicita
ções HTTP.

Defina uma dependencia para o Angular HTTP Client Service no construtor

Crie um método para cada solicitação HTTP.
No método, chame o método HTTP desejado, como get, e passe a URL para o servidor desejado.

Use Generics para especificar o tipo de retorno de resposta. Isso transformará a resposta HTTP bruta no tipo especificado.

Adicione o tratamento de erros no serviço conforme desejado usando o operador catchError.

export class ProductService {

  private productUrl='api/products/products.json'

  constructor(private http: HttpClient) { }
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl)
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError)
      );
  }
private handleError(err: HttpErrorResponse) {

}



Em qualquer component que precise de dados de um serviço de dados, chame o método subscribe para assinar o Observable

Forcene uma função a ser executada quando o observable emite um item.Isso geralmente atribui uma propriedade aos dados retornados e, se essa propriedade estiver associada a um modelo, os dados recuperados aparecerão na visualização.

Adicione uma função de erro para lidar com quaisquer erros retornados.

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  }

  O component deve cancelar a assinatuta de qualquer Observable o qual ele se inscreve.

this.sub=this.getProducts().subscribe(...)

Implement o ciclo de vida OnDestroy

export class PLComponet implements OnInit, OnDestroy



Implemente o ciclo de vida OnDestroy e use a variável de assinatura no método ngOnDestroy para cancelar assinatura. 

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

## Routings

Um aplicativo Angular é um aplicativo SPA Single Page Application ou seja um aplicativo pagina unica.

Configuramos uma rota para cada component que deseja exibir a sua visualização na página.
Como parte do design de nosso aplicativo, fornecemos um menu, uma barra de ferramentas, botões, imagens , links de dados que permitem ao usuário selecionar a visualização a ser exibida.
Amarramos uma rota a cada opção ou ação, ou seja quando o o usuario seleciona a opção ou executa a ação a rota associada é ativada.
Ativando a rota de um component exibe a visualização desse component.

Por padrão o angular usar URL'S no estilo HTML5 que não exibem o simbolo  de hash para indicar a nevegação local: www.web.com/products . Ao usar OS urls de estilo HTML5 vc precisa configurar seu servidor web para realizar a reescrita de URL. E isso depende de como funciona seu servidor web.
Angular também suporta roteamento de estilo hash : www.web.com/#/products

O modelo é exibido usando a diretiva de roteamento:  <router-outlet></router-outlet>

Ex: <a a routerLink="/products">Product List</a>

{ path: 'products' , component: ProductListComponent }

qUANDO CLICAMOS NO BOTÃO: e aparece a url: www.web.com/products 

O roteamento é baseado em componentes que queremos fornecer como alvos de roteamento e definimos uma rota para cada um.

ex: 'products' ProductListComponent 
    'products/id' ProductDetailComponent
    'welcome' WelcomeComponent

o Angular fornece  RouterModule no pacote do roteador angular, ele registra o provedor de serviços do roteador, ele também declara as diretivas do roteador.

Existem duas diretivas do roteador: RouterLink e RouterOutlet ao importar o RouterModule teremos acesso a essas diretivas.
- Router Module também expõe as rotas que configuramos.

Para garantir que as rotas estão disponíveis para o aplicativo fazemos isso passando as rotas para RouterModule, assim: RouterModule.forRoot([]). Chamamos o método forRoot do RouterModule e passamos nossa matriz de rotas para esse método, isso estabelece  as rotas para a raiz de nosso aplicativo. Dessa forma podemos configurar algumas rotas .

Configure Rotas

[
  { path:'products', component:ProductListComponet  },
  { path:'products/id', component:ProductDetailComponet  },
  { path:'', redirectTo: 'welcome', pathMatch:'full'  },
  { path:'**', component:PageNotFoundComponent  }
]

o path-> este segmento de caminho de URL é anexado ao URL de nosso aplicativo.
component-> associamos um component associado a rota  é o model deste componente que é exibido quando a rota é ativada.

A primeira rota simplesmente mapeia um segmento de caminho de URL especifico para um component especifico.
O id na segunda rota representa um parametro de rota, podemos definir qualquer numero de parametros separados por barras
a terceira rota define uma rota padrão, o redirecionamento aqui traduz a rota vazia para o segmento de caminho padrão desejado, neste exemplo a rota welcome, uma rota de redirecionamento requer uma propriedade de pathMatch para informar ao roteador como combinar o segmento de caminho de URL com o caminho de uma rota, queremos essa rota padrão quando o lado do client estiver vazio. Então definimos pathMatch como full.

Os asteriscos na ultima rota denotam um caminho curinga, o roteador corresponde a esta rota se o URL solicitado não corresponder a nenhum caminho na configuração. Isso é util para exibir uma página 404 not found ou redirecionar para outra rota.


Com o roteamento , o usuario pode navegar pelo o aplicativo de várias maneiras. O usuário pode clicar em uma oppção de menu, link, imagem ou botão que ativa ou navega para uma rota.
O usuároi pode digitar o segmento de URL associado na barra de endereço após o URL do aplicativo ou usar um marcador para esse URL. Ou pode clicar nos botões de avançar ou voltar do navegador.



## Técnicas Adicionais de Navegação e Roteamento


Existem duas maneiras de um component ler os parametros de uma rota:
-Se o componente só precisar ler o parametro da rota uma vez,usamos o snapcshot da rota para acessar o paramMap e obter o parametro.
this.route.snapshot.paramMap.get('id');
O snapshat nos dá informação sobre uma rota em um único ponto no tempo.Usamos essa rota quando ela não muda durante a exibição do componente.

- Se o component precisa redesenhar os parametro conforme eles mudam usamos o paramMap Observable
this.route.paramMap.subscribe(
  params=>console.log(params.get('id'))
);

Observable: é uma coleção de itens que ocorrem ao longo do tempo. (Collection of items over time). Assinamos oObservable com subscribe para receber as notificações, toda vez que os parâmetros mudam. 

Em ambos os casos a string especificada no get deve corresponder ao nome do parametro do path de configuração da rota.
{
  path: products/:id',
  component: ProductDetailComponent}
}

## Protected Routes with guards (limitando acesso a uma rota)

Podemos usar Guards(protetores) para limitar o acesso a algumas rotas.

- CanActivate:  guarda a navegação de uma rota
- CanDeactivate: para proteger a nevagação longe da rota atual
- Resolve : para pré-buscar dados antes de ativar uma rota 
- CanLoad: para evitar roteamento assícrono

Para evitar erros null ou undefined em nossos templates usamos o operador de navegação segura(safe navigation operator '?')
Ex: {{ product?.productName}}
Ele só navega para o operador se ele tiver um valor não null ou undefined

podemos usar o safe Navegaton operator para navegar com segurança por uma cadeia de propriedades também.
{{product?.supplier?.companyName}}

Use a diretiva ngIf para remover um conjunto inteiro de elementos de um template se o valor de uma propriedade for null ou undefined.

<div  *ngIf='product'>
<div>Name:</div>
<div>product.productName</div>
</div>>

Podemos 
passar qualquer numero de parametros para uma rota:

app.module.ts
     { path:'products/id', component:ProductListComponent  },
product-list.component.html
<a [routerLink]="['/products', product.productId]">{{product.productNme}}</a>
product-detail.component.ts
import{ActivatedRoute} from'@angular/route';

constructor (provate route: ActivatedRoute){
  console.log(this.route.snapshot.paramMap.get('id'));
}

Para ativar uma rota com código use o serviço de roteador e defina-o como uma dependencia do construtor.

## Angular Modules

Um módulo angular é uma classe com um decorator NgModule. Seu objetivo é organizar as partes do nosso aplicativo, organizar em blocos coesos de funcionalidade e estender nosso aplicativo com recursos de bibliotecas externas. 
Modulos angular fornecem o ambiente para resolver diretivas e pipes em nossos modelos de componentes.

NModules são uma ótima maneira d agregar seletivamente classes de outros módulos e reexportá-los em um módulo de conveniência consolidado.

Um módulo angular declara cada componete, diretiva e pipe que gerencia. Cada diretiva de componente e pipe que criamos pertencem a um módulo angular.Um módulo angular inicializa nosso componente de aplicativo raiz(bootstrap)
O angular module pode exportar componentes, diretivas, pipes e até outros modulos angular.Disoonibilizando -os para outros módulos importar  e usar. Quando digo importações, quero dizer adicionado a matriz de importações de decorater NgModule.

Angular module é como se fosse uma caixa , onde declaramos cada um de nossos componentes. AppComponent, productList-component, productDetailComponent, welcomecomponent, se esses componentes precisam de uma funcionalidade , essa funcionalidade precisa ser definida em angula module.

ex: se preciso do serviço de roteador e rotas então preciso declarar RouterModule
    se usar ngModel[(ngModel)]então preciso declarar FormsModule
    se preciso de uma lista e o component usa ngFor e ngIf então preciso declarar BrowserModule
    se preciso usar o PIPE então preciso declarar o pipe

De uma forma geral o móduloAngular fornece um ambiente de resolução de modelo para cada componente que pertence ao módulo. Ele fornece uma maneira para o compilador encontrar e resolver a sintaxe angular que colocamos no HTML.

Cada aplicativo angular tem pelo o menos um módulo Angular, chamado de app root(aplicativo raiz) ou AppModule, e também tem pelo o menos um componente de aplicativo raiz, ou appComponent. O appModule inicializa o AppComponent para fornecer a diretiva usada no arquivo index.html, ex: 'pm-root';

A matriz de bootstrap do decorator @NgModule define o componente que é o ponto de partida do aplicativo, este é o component que é carregado quando o aplicativo é iniciado. A MATRIZ DE BOOTSTRAP DEVE SER USADA APENAS NO MÓDULO DE APLICATIVO RAIZ.


Exports Array

A matriz de exportação do decorator @NgModule nos permite compartilhar componetes , diretivas e pipes de um modulo angular com outros modulos. 


RouterModule.forRoot: registra o provedor de serviço do roteador, declara as diretivas do roteador e expõe nossas rotas configuradas.  

RouterModule.forChild: declara diretivas de rotas e expões configuração de rotas;


## Shared Module(modulo compartilhado)

O objetivo do módulo compartilhado é organizar um conjunto de peças comumente usadas em um modulo e exportar essas peças que que estejam disponíveis para qualquer modulo que importe o modulo compartilhado. 


Criar um module numa  pasta existente:
ng g m shared/shared --flat -m products/product.module
-- flat : já temos a pasta compartilhada, só queremos incluir o module então usamos --flat. Dessa forma a CLI não criará outra pasta
- m: queremos importar este modulo para o ProductModule então usamos -m e especificamos o caminho e o nome do modulo products-list/product.module


O objetivo de AppModule é orquestrar o aplicativo como um todo.

## Overview

Gerando um um new Angular app -> ng new
Servindo a aplicação ng serve
gerando o codigo ng generate
testando a aplicação ng test
Building a aplicação ng build

Os comandos angular CLI são acessandos usando ng, <command> : nome do comando, argumentos e opções prefixados com --

ng <command> <args>--<options>

instalar angular cli globalmente: npm install -g @angular/cli

ng help : mostra a lista de todos os comandos

ng update podemos atualizar um projeto para a versão mais reente do angular


## Observações

O comando ng serve compila o aplicativo transformando o nosso template e código Typescript  em javaScript.
Ele gera pacotes de aplicativos a partir desse JS.Ele inicia um servidor web local que escuta na porta 4200.

ng serve -o -> open abra o navegador padrão

lista de pacotes gerados:

Initial Chunk Files   | Names         |  Raw Size
vendor.js             | vendor        |   1.77 MB | - > contem as bibliotecas angular e de teerceiros
polyfills.js          | polyfills     | 318.06 kB | ->  polifils declarados no arquivo polyfil.ts, tem o suporte a vários navegadores e recursos
styles.css, styles.js | styles        | 210.09 kB |-> possui os styles
main.js               | main          |  48.05 kB |-> contem nosso codigo de aplicativo e runtime.js e o carregador de webpack
runtime.js            | runtime       |   6.52 kB |


webpack é a tecnologia por trás do processo de compilação e agrupamento.

## gerando código

component-> ng g c <name>
directives-> ng g d <name>
route guards-> ng g g <name>
interfaces-> ng g i <name>
modules-> ng g m <name>
pipes-> ng g p <name>
services-> ng g s <name>

## Principais comandos da cli de referencia

ng help-> mostra a documentação da CLI
ng new-> cria uma nova aplicação angular
ng serve-> 


## testing Application

Testar nosso código angular é muito importante.

ng test: Com esse comando o angular gera vários testes para nós.

Para sair do teste  é necessário dar ctrl+c 

## Building da Aplicação

ng build: esse comando ajuda a preparar o seu aplicativo para implantação.
Quando implantamos em produção queremos que nossos pacotes sejam os menores possíveis, isso significa que queremos minificar (minify/uglify).
Ou seja fazemos o tree Shaking( agitação da árvore) onde sacodimos nosso código para eliminar quaisquer galho morto, o que significa que será removido qualquer parte não utilizada.

✔ Index html generation complete.

Initial Chunk Files           | Names         |  Raw Size | Estimated Transfer Size
main.0f235fe02d748aba.js      | main          | 116.38 kB |                34.77 kB
polyfills.3495ce0a0cb55688.js | polyfills     |  33.08 kB |                10.67 kB
runtime.5747c2d0904db68f.js   | runtime       |   1.05 kB |               599 bytes
styles.ef46db3751d8e999.css   | styles        |   0 bytes |                       -
                              | Initial Total | 150.50 kB |                46.03 kB

Quando a compilação estiver concluída , veremos a lista de bundles gerados. E agora aparece o hash, isso é feito para bloquear o cache. 
Toda vez que alteramos algo em nosso código ele precisa ser reimplantado no servidor. Ou seja quando alteramos os arquivos o vavegador baixará a versão mais recente por que os nomes dos arquivos não corresponderão ás versões em cache.

Quando for concluido o processo de compilação de ng , teremos uma pasta dist em nosso projeto. Se abrirmos a pasta veremos nossos pacotes reais. Por padrão , o comando build não gera arquivos de mapa. Todo o arquivo foi minificado. E agora podemos implantar o código no servidor.

## Review

O que é um component?

Component= template+ class(properties and methods)+metadata
Descobrimos que um component é uma view definida com um modelo, uma lógica definida com uma classe e metadados definidos com decorator.

por que precisamos de um service?
Implementat funcionalidades independentes de qualquer componente específico, compartilhar dados e lógica entre componentes e encapsular interações externas como acesso a dados.

Você usa npm em Angular para: Instalando pacotes e executando scripts

Qual é a maneira recomendada atual de registrar um serviço com o injetor Angular raiz?Configurando a providedIn propriedade do Injectable decorador para o serviço.
Qual é o propósito de um modelo Angular?Forneça o HTML para a interface do usuário
O benefício de encapsular um estilo de componente é que o estilo: Aplica-se apenas ao modelo do componente
Qual das opções a seguir é a sintaxe correta para a ngFordiretiva ?  *ngFor='let product of products'
Você poderia pensar em um observável como:Um fluxo cujos itens chegam de forma assíncrona ao longo do tempo
Qual diretiva de roteamento é usada para vincular uma rota a uma ação do usuário?RouterLink
A finalidade do @Inputdecorador em um componente aninhado é:Expor uma propriedade que um contêiner pode definir usando a associação de propriedade
Qual das opções a seguir é a sintaxe correta para ligação bidirecional(TWO-WAY DATA BINDING)? [(ngModel)]='listFilter'
O objetivo da classe de um componente é:Forneça as propriedades e métodos necessários para a exibição
Um módulo ES 2015 é:Um arquivo com pelo menos um exportouimport
Uma classe quer usar um serviço. Onde você define a dependência para o serviço injetado?No construtor da classe
Um dos principais benefícios de uma interface é que uma interface pode ser usada como:Um tipo de dados para digitar fortemente qualquer objeto
Qual é o propósito de um guarda de rota?Para impedir a navegação de ou para uma rota com base em critérios
Qual das opções a seguir é a sintaxe de interpolação angular correta?{{pageTitle}}

Quando ocorre o OnChanges evento do ciclo de vida? Quando o valor de uma propriedade vinculada a dados é @Inputalterado

O que o parâmetro genérico neste código faz?

this.http.get<IProduct[]>(this.productUrl)
Transforma a resposta HTTP bruta em uma variedade de produtos

Qual é o objetivo da RouterOutlet diretiva?Identifique onde colocar a visualização do componente roteado

A seguinte sintaxe é:<button (clique)='toggleImage()'/>
Vinculação de evento do click evento ao toggleImage método

O que é um componente angular?Modelo + Classe + Metadados
