import { NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { BookComponent } from '../book/book.component';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BookComponent, NgFor, NgIf, NgClass],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  books: Book[] = [
    {
      isbn: '000',
      title: 'Angular',
      description: 'Tolles Buch',
      rating: 5
    },
    {
      isbn: '111',
      title: 'AngularJS',
      description: 'Altes Buch',
      rating: 3
    },
    {
      isbn: '222',
      title: 'jQuery',
      description: 'Blödes Buch',
      rating: 1
    }
  ];

  bs = inject(BookRatingService);

  constructor() {
    // setTimeout(() => this.books = [], 3000);
  }

  doRateUp(book: Book): void {
    const ratedBook = this.bs.rateUp(book);
    // const ratedBook = { ...book, rating: book.rating + 1 };
    this.updateAndSortList(ratedBook);
  }

  doRateDown(book: Book): void {
    const ratedBook = this.bs.rateDown(book);
    this.updateAndSortList(ratedBook);
  }

  updateAndSortList(ratedBook: Book): void {
    this.books = this.books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a, b) => b.rating - a.rating)
  }
}
