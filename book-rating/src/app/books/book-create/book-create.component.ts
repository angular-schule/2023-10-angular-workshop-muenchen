import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'app-book-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent {

  bookForm = new FormGroup({

    isbn: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    }),

    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),

    description: new FormControl('', {
      nonNullable: true
    }),
  });

  c = this.bookForm.controls;

  isInvalid(control: FormControl) : boolean {
    return control.invalid && control.touched;
  }

  hasError(control: FormControl, errorCode: string): boolean {
    return control.hasError(errorCode) && control.touched;
  }

  submitForm() {
    const newBook: Book = {
      ...this.bookForm.getRawValue(),
      rating: 1
    };

    // TODO
    // 1. Erstelle ein Event mit dem Namen `create`
    // 2. Trigger das Event mit dem neuen Buch
    // 3. Subscribe dich auf das Event im Dashboard
    // 4. Füge das neue Buch dem Buch-Array hinzu (immutable!)

    this.bookForm.reset();

  }
}
