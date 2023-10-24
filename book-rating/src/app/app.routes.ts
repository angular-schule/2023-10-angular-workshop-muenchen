import { Routes } from '@angular/router';

import { BookDetailsComponent } from './books/book-details/book-details.component';
import { DashboardComponent } from './books/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'books' },
  { path: 'books', component: DashboardComponent, title: 'Dashboard' },
  { path: 'books/:isbn', component: BookDetailsComponent, title: 'Details' },
  // { path: '**', component: NotFoundComponent }
];


