/**
 * Title: base-layout.component.ts
 * Author: Mackenzie Lubben-Ortiz
 * Date: 26 April 2024
 * Description: base-layout component
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrl: './base-layout.component.css'
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;


  constructor() {
    this.assignment = 'Assignment 6.4 - Input Properties';
  }

  ngOnInit(): void {

  }

}
