import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/core/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books:any;
  searchText:any;
  constructor(private booksService:BooksService){}
  
  ngOnInit(): void {
      this.booksService.getAllBooks().subscribe((res)=>{
        this.books=res;
      });
      this.booksService.sortSubject.subscribe((sortCriteria:any)=>{
        this.books=this.booksService.sortBooks(sortCriteria);
      });
      this.booksService.priceFilterSubject.subscribe((price:any)=>{
        this.booksService.getAllBooks().subscribe((res)=>{
          this.books=res;
          this.books=this.booksService.getFilteredBooksByPrice(price);
        });
      });
      this.booksService.searchSubject.subscribe((searchString:any)=>{
        this.searchText=searchString;
      })
  }
}
