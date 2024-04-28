import { ITranscript } from './../transcript.interface';
/**
 * Title: gpa.component.ts
 * Author: Mackenzie Lubben-Ortiz
 * Date: 28 April 2024
 * Description: gpa component
 */

import { Component, OnInit, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrl: './gpa.component.css'
})
export class GpaComponent implements OnInit {

  @Input() gpaTotal: number;

  constructor() {
    this.gpaTotal = 1.1-2;

  }

  ngOnInit(): void {

  }

}
