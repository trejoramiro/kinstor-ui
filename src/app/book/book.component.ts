import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass']
})
export class BookComponent implements OnInit {
  @Input() book: any; 
  isBookModalVisible: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  showBookModal() {
    this.isBookModalVisible = true;
    console.log('isBookModalVisible ', this.isBookModalVisible);
  }
}
