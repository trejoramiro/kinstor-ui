import { Component, OnInit, Input } from '@angular/core';
import { DialogModule } from 'primeng/dialog'

@Component({
  selector: 'app-book-modal',
  templateUrl: './book-modal.component.html',
  styleUrls: ['./book-modal.component.sass']
})
export class BookModalComponent implements OnInit {

  @Input() book: any;
  @Input() isModalVisible: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
