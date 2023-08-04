import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/core/books.service';
import { CartService } from 'src/app/core/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchText:any='';
  cartItemCount:any;
  isSortMenuVissible:boolean=false;
  criteria:any []=['price(low to high)'];
  constructor(private  cartService:CartService, private booksService:BooksService){}
  ngOnInit(): void {
  
    this.cartService.cartSubject.subscribe((cartItems:any) => {
      this.cartItemCount=cartItems.length;
    })

  }

  showSortMenu(){
    this.isSortMenuVissible =!this.isSortMenuVissible;
  }

  sortBooks(criterion:any){
    this.booksService.getSortCriterion(criterion)
  }

  searchBook(searchText:any){
    this.booksService.getSearchString(searchText);
  }

}
