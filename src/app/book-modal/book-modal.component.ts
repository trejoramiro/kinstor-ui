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
  bookInformation: any;

  constructor(public activeModal: NgbActiveModal, private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBookInformation(this.book.ISBN).subscribe({ 
      next: data => {
        this.bookInformation = data[`ISBN:0${this.book.ISBN}`];
        console.log(data);
        console.log('***', this.bookInformation.details.description);
      }
    });
  }

}
