/**
 * Title: book.interface.ts
 * Author: Mackenzie Lubben-Ortiz
 * Date: 16 April 2024
 * Description: book interface
 */
export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
