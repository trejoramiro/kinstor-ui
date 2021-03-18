import { Component, OnInit } from '@angular/core';
import { BookService } from './../book.service';

@Component({
  selector: 'app-book-grid',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-grid.component.sass']
})
export class BookGridComponent implements OnInit {

  bookTitle = '';
  searchResults = [];
  errorMessage = '';
  hideSpinner = true;
  showZeroResults = false;
  hideSubTitle = true;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  searchRecommendationsForBookTitle() {
    this.searchResults = [];

    if (!this.bookTitle.trim()) {
      return;
    }

    this.hideSpinner = false;

    this.bookService.getBooks(this.bookTitle).subscribe({
      next: books => {
        // console.log('***' , JSON.parse(books));
        let parsedBooks = JSON.parse(books);
        parsedBooks.map((book) => {
          book.ImageUrl = `http://covers.openlibrary.org/b/isbn/0${book.ISBN}-L.jpg`;
          
          this.bookService.getCoverForBook(book.ISBN).subscribe(
            response => console.log('***', response),
            err => {
              if (err.status === 404)
                book.ImageUrl = './assets/default_book_cover.png';
              }
          );
        })
        this.searchResults = this.searchResults.concat(parsedBooks);
        this.hideSubTitle = false;
        // this.showZeroResults = (this.searchResults.length === 0); 
        this.hideSpinner = true;
      },
      error: err => {
        this.errorMessage = err;
        this.hideSpinner = true;
      }
    });
  }
}
