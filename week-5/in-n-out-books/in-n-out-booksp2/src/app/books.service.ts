/**
 * Title: books.service.ts
 * Author: Mackenzie Lubben-Ortiz
 * Date: 17 April 2024
 * Description: books service
 */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBook } from './book.interface';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook>

  constructor() {
    this.books = [
      {
        isbn: '0618260307',
        title: 'The Hobbit',
        description: 'Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep one day to whisk him away on an adventure. They have launched a plot to raid the treasure hoard guarded by Smaug the Magnificent, a large and very dangerous dragon.',
        numOfPages: 322,
        authors: ['J.R.R. Tolkien']
      },
      {
        isbn: '0547928211',
        title: 'The Fellowship of the Ring',
        description: 'In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell into the hands of Bilbo Baggins, as told in The Hobbit. In a sleepy village in the Shire, young Frodo Baggins finds himself faced with an immense task, as his elderly cousin Bilbo entrusts the Ring to his care. Frodo must leave his home and make a perilous journey across Middle-earth to the Cracks of Doom, there to destroy the Ring and foil the Dark Lord in his evil purpose.',
        numOfPages: 432,
        authors: ['J.R.R. Tolkien']
      },
      {
        isbn: '0547928203',
        title: 'The Two Towers',
        description: 'Frodo and his Companions of the Ring have been beset by danger during their quest to prevent the Ruling Ring from falling into the hands of the Dark Lord by destroying it in the Cracks of Doom. They have lost the wizard, Gandalf, in a battle in the Mines of Moria. And Boromir, seduced by the power of the Ring, tried to seize it by force. While Frodo and Sam made their escape, the rest of the company was attacked by Orcs. Now they continue the journey alone down the great River Anduin—alone, that is, save for the mysterious creeping figure that follows wherever they go.',
        numOfPages: 352,
        authors: ['J.R.R. Tolkien']
      },
      {
        isbn: '054792819X',
        title: 'The Return of the King',
        description: 'As the shadow of Mordor grows across the land, the Companions of the Ring have become involved in separate adventures. Aragorn, revealed as the hidden heir of the ancient Kings of the West, has joined with the Riders of Rohan against the forces of Isengard and takes part in the desperate battle of the Hornburg. Merry and Pippin, captured by Orcs, escape into Fangorn Forest and there encounter the Ents.',
        numOfPages: 432,
        authors: ['J.R.R. Tolkien']
      },
      {
        isbn: '0593622456',
        title: 'Pride and Prejudice',
        description: 'Though her sisters are keen on finding men to marry, Elizabeth Bennet would rather wait for someone she loves - certainly not someone like Mr. Fitzwilliam Darcy, whom she finds to be smug and judgmental, in contrast to the charming George Wickham. But soon Elizabeth learns that her first impressions may not have been correct, and the quiet, genteel Mr. Darcy might be her true love after all.',
        numOfPages: 480,
        authors: ['Jane Austen']
      }

    ]
   }

   getBooks(): Observable<IBook[]> {
    return of(this.books);
   }

   getBook(isbn: string): IBook {
    for(let book of this.books) {
      if(book.isbn === isbn) {
        return book;
      }
    }
    return {} as IBook;
   }
}
