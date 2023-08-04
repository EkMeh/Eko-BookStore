import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})


export class CartItemComponent implements  OnInit{

  @Input() item:any;
  discontedPrice:any;
  itemPrice:any;

  constructor (private cartService:CartService){}


  getPriceDetails(item:any)
  {
    this.discontedPrice=this.cartService.getPriceDetailsInCartItem(item).discountedPrice;
    this.itemPrice=this.cartService.getPriceDetailsInCartItem(item).price;
  }

  ngOnInit(): void {
      this.getPriceDetails(this.item)
  }

  decItemCount(item:any){
    this.cartService.decProductCount(item);
    this.getPriceDetails(item);
  }
  incItemCount(item:any){
    this.cartService.incProductCount(item);
    this.getPriceDetails(item);
  }
  removeItem(item:any){
    this.cartService.removeItemFromCart(item);
  }
}
