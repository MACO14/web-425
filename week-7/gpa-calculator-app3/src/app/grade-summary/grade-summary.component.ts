import { ITranscript } from './../transcript.interface';
/**
 * Title: grade-summary.component.ts
 * Author: Mackenzie Lubben-Ortiz
 * Date: 26 April 2024
 * Description: grade-summary component
 */

import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrl: './grade-summary.component.css'
})
export class GradeSummaryComponent implements OnInit {

  @Input() grade: string;
  @Input() course: string;

  constructor() {

  }

  ngOnInit(): void {

  }


}
