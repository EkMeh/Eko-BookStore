import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts:any[]=[];
  cartSubject=new Subject();

  constructor() { }

  addProductToCart(product:any){
    let currentBox={...product, count:1};
    this.cartProducts.push(currentBox);
    this.cartSubject.next(this.cartProducts)
  }
}
