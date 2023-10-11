import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [NgIf],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input({ required: true }) book?: Book;
}
