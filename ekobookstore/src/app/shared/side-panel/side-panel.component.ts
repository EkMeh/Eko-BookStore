import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/core/books.service';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent implements OnInit{

  ispriceFiltersVisible:Boolean=false;
  priceFilters=[500];
  constructor(private bookService:BooksService){}

  ngOnInit(): void {
      
  }

  showPriceFilters(){
    this.ispriceFiltersVisible=!this.ispriceFiltersVisible;
  }

  filterBooksByPrice(priceFilter:any){
    this.bookService.getPriceFilter(priceFilter);
  }

}
