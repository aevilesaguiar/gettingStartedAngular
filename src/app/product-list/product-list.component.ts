import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';




@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  pageTitle: string= 'Product List';
  imageWidth: number=50;
  imageMargin: number=2;
  showImage: boolean=false;

  private _listFilter: string='';
  //getter e setter da variavel acima
  get listFilter():string{
    return this._listFilter;
  }

  set listFilter (value: string){
    //o setter é executado sempre que um valor é atribuido a apropriedade associada
    this._listFilter=value;

    console.log('In setter', value);
    this.filteredProducts=this.performFilter(value);
  }

  filteredProducts: IProduct[]=[];



  products: IProduct[]=[];
  //método
  toggleImage(): void{
    this.showImage=!this.showImage;
  }

  performFilter(filterBy:string):IProduct[]{
    //este código começa convertendo os critérios de filtro em minusculos
    filterBy=filterBy.toLocaleLowerCase();
    //colocamos toLocaleLoewerCase para que não diferencia maiusculas de minusculas
    return this.products.filter((product:IProduct)=>product.productName.toLocaleLowerCase().includes(filterBy));
//o método includes() retorna true se o productName inclui a string de filtro definida
//este codigo filtra nossa lista de produtos apenas para aqueles com um nome de produto que inclui a string de filtro
//de lista. Se a string de filtros estive vazia , ele retornará todos os produtos.

  }

  //quando uma instancia de product-list.componente é criada
//o injector Angular injeta na instancia de ProductService
  constructor(private productService: ProductService) {


  }

  //o clico de vida OnInit fornece um local para executar qualquer inicialização de component
  // e é um ótimo lugar para recuperar os dados para o modelo
  ngOnInit(): void {

    //propriedade de produtos para os produtos devolvidos no nosso serviço
    this.products=this.productService.getProducts();
    //lista completa de serviços
    this.filteredProducts=this.products;

  }

  onRatingClicked(message: string):void{
    this.pageTitle='Product List: '+message;
  }


}
