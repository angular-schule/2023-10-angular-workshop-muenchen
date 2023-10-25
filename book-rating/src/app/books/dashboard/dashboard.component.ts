import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { BookComponent } from '../book/book.component';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookCreateComponent } from '../book-create/book-create.component';
import { BookStoreService } from '../shared/book-store.service';
import { Store } from '@ngrx/store';
import { selectBooks, selectBooksLoading } from '../store/book.selectors';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BookComponent, NgFor, NgIf, NgClass, BookCreateComponent, AsyncPipe],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  books$ = inject(Store).select(selectBooks);
  loading$ = inject(Store).select(selectBooksLoading);

  // books: Book[] = [];

  // ratingService = inject(BookRatingService);
  // storeService = inject(BookStoreService);

  constructor() {
    // this.storeService.getAllBooks().subscribe(books => this.books = books);
  }

  doRateUp(book: Book): void {
    // const ratedBook = this.ratingService.rateUp(book);
    // // const ratedBook = { ...book, rating: book.rating + 1 };
    // this.updateAndSortList(ratedBook);
  }

  doRateDown(book: Book): void {
    // const ratedBook = this.ratingService.rateDown(book);
    // this.updateAndSortList(ratedBook);
  }

  updateAndSortList(ratedBook: Book): void {
    // this.books = this.books
    //   .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
    //   .sort((a, b) => b.rating - a.rating)
  }

  addBook(newBook: Book) {
    // this.books = [...this.books, newBook];
  }
}
