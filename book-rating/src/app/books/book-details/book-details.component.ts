import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { catchError, concatMap, map, mergeMap, of, retry, switchMap } from 'rxjs';
import { BookStoreService } from '../shared/book-store.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  bookStore = inject(BookStoreService);

  book$ = inject(ActivatedRoute).paramMap.pipe(
    map(param => param.get('isbn') || ''),
    switchMap(isbn => this.bookStore.getSingleBook(isbn).pipe(
      retry({
        count: 3,
        delay: 1000
      }),
      catchError((err: HttpErrorResponse) => of({
        isbn: '000',
        title: 'FEHLER',
        description: err.message,
        rating: 0
      }))))
  )
}
