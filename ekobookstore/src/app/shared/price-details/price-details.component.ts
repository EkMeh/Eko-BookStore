import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/cart.service';

@Component({
  selector: 'app-price-details',
  templateUrl: './price-details.component.html',
  styleUrls: ['./price-details.component.css']
})
export class PriceDetailsComponent implements OnInit{

  cartItems:any[]=[];
  cartItemPrice:any;
  cartItemsDisconunt:any;
  deliveryCharge:any;
  constructor(private cartService:CartService){}

  ngOnInit(): void {
      this.cartItems=this.cartService.getAllCartItems();
      this.getBillingDetails();
      this.cartService.cartSubject.subscribe((items:any)=>{
        this.cartItems=items;
        this.getBillingDetails();
      })
  }

  getBillingDetails(){
    let billingDetails=this.cartService.getBilling(this.cartItems);
    this.cartItemPrice=billingDetails.price;
    this.cartItemsDisconunt=billingDetails.discount;
    this.deliveryCharge=billingDetails.delivery;
  }

}
