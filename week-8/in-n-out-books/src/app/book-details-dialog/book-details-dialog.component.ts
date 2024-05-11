/**
 * Title: book-details-dialog-component.ts
 * Author: Mackenzie Lubben-Ortiz
 * Date: 17 April 2024
 * Description: book details dialog component
 */

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IBook } from '../book.interface';


@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrl: './book-details-dialog.component.scss'
})
export class BookDetailsDialogComponent {

  book: IBook;


  constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.book = data.book;
  }

  ngOnInit(): void {

  }
}
