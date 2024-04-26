/**
 * Title: wishlist.component.ts
 * Author: Mackenzie Lubben-Ortiz
 * Date: 23 April 2024
 * Description: wishlist component
 */
import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent implements OnInit {

  items: Array<IWishlistItem> = [];

  constructor() {}

  ngOnInit(): void {

  }

  updateItemsHandler(item: IWishlistItem) {
    this.items.push(item);
  }
}
