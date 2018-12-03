import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private api: ApiService,
    private authFire: AngularFireAuth
  ) { }

  getUsers() {
    return this.api.get('/users')
  }

  createUser(email: string, password: string): Observable<boolean> {
    return from(this.authFire.auth.createUserWithEmailAndPassword(email, password))
      .pipe(map(user => {
        this.api.post('/users', { email }).subscribe();
        return user !== null;
      }));
  }
}
