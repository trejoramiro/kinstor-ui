import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass']
})
export class BookComponent implements OnInit {
  @Input() book: any; 
  @Input() index: number

  constructor() { }

  ngOnInit(): void {
  }

  showBookModal() {
  }


}
