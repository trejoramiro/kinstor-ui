import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-modal',
  templateUrl: './book-modal.component.html',
  styleUrls: ['./book-modal.component.sass']
})
export class BookModalComponent implements OnInit {

  @Input() book: any;
  @Input() index: number;
  modalName = '';

  constructor() { }

  ngOnInit(): void {
    this.modalName = `exampleModal${this.index}`
  }

}
