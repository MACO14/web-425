/**
 * Title: gpa.component.ts
 * Author: Mackenzie Lubben-Ortiz
 * Date: 28 April 2024
 * Description: gpa component
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrl: './gpa.component.css'
})
export class GpaComponent implements OnInit {

  @Input() gpaTotal: number;

  ngOnInit(): void {

  }

}
