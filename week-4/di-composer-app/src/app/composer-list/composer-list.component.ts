/**
 * Title: composer-list.component.ts
 * Author: Mackenzie Lubben-Ortiz
 * Date: 07 April 2024
 * Description: Composer list component; displaying a list of composers
 */


import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;

  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();

  }
  ngOnInit(): void {
  }

}
