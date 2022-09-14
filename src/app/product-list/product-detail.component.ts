import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from './product';
import { Router } from '@angular/router';

@Component({
  //não precisamos aninhar esse component, o mesmo será exibido como parte do roteamento
  //selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string='Product Detail';
  product: IProduct | undefined;

  //a instancia de ActivedRoute é injetada nessa classe component
  constructor(private route: ActivatedRoute, private router: Router) { }

  //ngOnit é executado quando o component é inicializado
  ngOnInit(): void {

    //adicionamos a função de Number por que o padrão é string ou nulo
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle+=`: ${id}`;
  }

  //método navega de volta
  onBack():void{
    this.router.navigate(['/products']);
  }

}
