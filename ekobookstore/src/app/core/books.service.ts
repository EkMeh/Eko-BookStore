import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  baseUrl='http://localhost:3000/books';
  books:any[]=[];

  constructor(private http:HttpClient) {}
  getAllBooks(){
    return this.http.get(this.baseUrl).pipe(map((book:any)=>{
      console.log('hi');
      this.books=book;
      return book;
    }))
  }
}
