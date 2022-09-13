import { Component, OnInit } from '@angular/core';

@Component({
  //não precisamos aninhar esse component, o mesmo será exibido como parte do roteamento
  //selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string='Product Detail';

  constructor() { }

  ngOnInit(): void {
  }

}
