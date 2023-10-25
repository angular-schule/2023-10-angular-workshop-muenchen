import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Book } from './book';


@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  httpClient = inject(HttpClient);

  getAllBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>('https://api.angular.schule/books');
  }

  getSingleBook(isbn: string): Observable<Book> {
    return this.httpClient.get<Book>('https://api.angular.schule/books/' + isbn + '/slow');
  }
}
