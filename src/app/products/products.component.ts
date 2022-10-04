import { HttpClient } from '@angular/common/http';
// import { Product } from './../../../../E-commerce/angular-ecommerce-app/client/src/app/shared/models/product.model';
import { Component, OnInit } from '@angular/core';
import { json } from 'body-parser';

export class Products {
  constructor(
    public id: number,
    public title: string,
    public price: string,
    public category: string,
    public description: string,
    public image: string
  ) {
  }
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Products[];

  constructor(
    private hhtpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getProducts()
    this.jewSel()
  }

  getProducts(){
    this.hhtpClient.get<any>('https://fakestoreapi.com/products').subscribe(
      response => {
        // console.log(response[0]);
        this.products = response;
        // console.log(this.products[].price);
        for (let i = 0; i < this.products.length; i++) {
          // const element = array[i];
          // console.log(this.products[i].price)
          let prodCalc = this.products[i].price
          let com = Math.min(parseFloat(prodCalc))
          console.log(com)

      }
      }
    );
  }

  jewSel(){
    this.hhtpClient.get<any>('https://fakestoreapi.com/products/category/jewelery').subscribe(
        response => {
          console.log(response);
          this.products = response;
        }
      );
  }
}

let prods = 'https://fakestoreapi.com/products'
fetch(prods)
  .then(res => res.json())
    .then(json => localStorage.setItem('products', JSON.stringify(json)))



