/**
 * Title: app.component.ts
 * Author: Mackenzie Lubben-Ortiz
 * Date: 16 April 2024
 * Description: app component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  assignment: string;

  constructor() {
    this.assignment = 'Exercise 5.4 - Dialogs'
  }
}
