import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: ApiService) { }

  getUsers() {
    return this.api.get('/user')
  }

  createUser(email: string, password: string) {
    return this.api.post('/user', { email, password })
  }
}
