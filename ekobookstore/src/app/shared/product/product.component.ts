import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CartService } from 'src/app/core/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  @Input() book:any;
  id:any;
  isProductInCart:boolean=false;
  constructor (private cartService:CartService) {}

  ngOnInit(): void {
      this.id={'isbn':this.book.isbn}
  }

  addToCart(book:any)
  {
    this.cartService.addProductToCart(book);
    this.isProductInCart=true;
  }
}
