/**
 * Title: sign-in-service.ts
 * Author: Mackenzie Lubben-Ortiz
 * Date: 30 April 2024
 * Description: sign-in service
 */

import { Injectable } from '@angular/core';

/**
 * Title: sign-in.service.ts
 * Author: Mackenzie Lubben-Ortiz
 * Date: 05 May 2024
 * Description: sign-in.service.ts
 */

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  studentIds: Array<number>;

  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }

  validate(studentId: number) {
    return this.studentIds.some(id => id === studentId);
  }
}

