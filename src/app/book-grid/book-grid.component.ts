import { Component, OnInit } from '@angular/core';
import { BookService } from './../book.service';

@Component({
  selector: 'app-book-grid',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-grid.component.sass']
})
export class BookGridComponent implements OnInit {

  books = [];
  errorMessage = ''

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    // this.bookService.getBooks().subscribe({
    //   next: books => {
    //     this.books = books;
    //   },
    //   error: err => this.errorMessage = err
    // });
    this.books = this.bookService.getDummyData();
  }
}
