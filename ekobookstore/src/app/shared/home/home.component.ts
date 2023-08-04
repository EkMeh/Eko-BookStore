import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/core/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books:any;
  constructor(private booksService:BooksService){}
  
  ngOnInit(): void {
      this.booksService.getAllBooks().subscribe((res)=>{
        this.books=res;
      });
  }
}
