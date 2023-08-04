import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/core/books.service';
import { CartService } from 'src/app/core/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  currentProduct:any;
  discountedPrice:any;
  isProductInCart:any;

  constructor(private activatedRouter:ActivatedRoute, private booksService:BooksService, private cartService:CartService){}

  ngOnInit(): void {
    this.activatedRouter.queryParams.subscribe((res)=>{
      this.currentProduct=this.booksService.getCurrentBook(res);
    })

    this.discountedPrice=this.cartService.getDiscountedPrice(this.currentProduct);
    this.isProductInCart=this.cartService.isProductInCart(this.currentProduct);
  }

  addToCart(book:any){
    this.cartService.addProductToCart(book);
    this.isProductInCart=true;
  }
}
