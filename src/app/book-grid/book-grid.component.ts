import { Component, OnInit } from '@angular/core';
import { BookService } from './../book.service';

@Component({
  selector: 'app-book-grid',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-grid.component.sass']
})
export class BookGridComponent implements OnInit {

  searchResults = [];
  modalResults = [];
  errorMessage = '';
  hideSpinner = true;
  showZeroResults = false;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.hideSpinner = false;
    this.searchResults = this.bookService.getDummyData();
    this.bookService.getBooks().subscribe({
      next: books => {
        console.log('**' , JSON.parse(books));
        let parsedBooks = JSON.parse(books);
        parsedBooks.map((book) => {
          book.ImageUrl = `http://covers.openlibrary.org/b/isbn/0${book.ISBN}-L.jpg`;
        })
        this.searchResults = this.searchResults.concat(parsedBooks);
        this.hideSpinner = true;
      },
      error: err => {
        this.errorMessage = err;
        this.showZeroResults = true;
        this.hideSpinner = true;
      }
    });
  }
}
