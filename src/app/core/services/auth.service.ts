import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userConnected: User;

  constructor(
    private api: ApiService,
    private router: Router
  ) { }

  connection(email: string, password: string): Observable<boolean> {
    return this.api.get(`/user?email=${email}&password=${password}`)
      .pipe(map((user: any) => {
        if(!user || user.length <= 0) return false;

        this.userConnected = user;
        return true;
      }))
  }

  get isConnected(): boolean {
    return this.userConnected ? true : false;
  }

  logout() {
    this.userConnected = null;
    this.router.navigate(['/']);
  }
}
