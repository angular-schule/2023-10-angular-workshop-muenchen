import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { concatMap, map, mergeMap, switchMap } from 'rxjs';
import { BookStoreService } from '../shared/book-store.service';

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
    switchMap(isbn => this.bookStore.getSingleBook(isbn))
  )
}
