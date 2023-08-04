import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchText:any;
  cartItemCount:any;
  constructor(private  cartService:CartService){}
  ngOnInit(): void {
  
    this.cartService.cartSubject.subscribe((cartItems:any) => {
      this.cartItemCount=cartItems.length;
    })

  }

}
