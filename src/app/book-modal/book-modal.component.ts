import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BookService } from './../book.service';

@Component({
  selector: 'app-book-modal',
  templateUrl: './book-modal.component.html',
  styleUrls: ['./book-modal.component.sass']
})
export class BookModalComponent implements OnInit {

  @Input() book: any;
  bookInformation = {
    details: {
      genres: '',
      copyright_date: '',
      description: ''
    }
  };

  constructor(public activeModal: NgbActiveModal, private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBookInformation(this.book.ISBN).subscribe({ 
      next: data => {
        if (Object.keys(data).length !== 0) {
          console.log('isbn', this.book.ISBN);
          this.bookInformation = data[`ISBN:0${this.book.ISBN}`];
          console.log('data', data);
        }
      }
    });
  }

  showBookDescription(): string {
    if (typeof this.bookInformation["details"]["description"] === 'object' && this.bookInformation["details"]["description"] !== null) {
      return this.bookInformation["details"]["description"]["value"];
    }
    return this.bookInformation["details"]["description"];
  }

  showGenre(): string {
    if (this.bookInformation["details"]["genres"]) {
      return `Genre: ${this.bookInformation["details"]["genres"]}`;
    }
    return '';
  }
}
