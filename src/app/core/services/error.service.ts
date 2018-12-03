import { Injectable } from '@angular/core';
import { AfError } from '../enums/af-error';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  handle(error: any) {
    if(error.code === AfError.EMAIL_EXISTS) {
      alert('email déjà utilisé');
    }else if (error.code === AfError.BAD_CREDENTIALS) {
      alert('bad credentials');
    } else {
      console.error(error);
    }
  }
}
