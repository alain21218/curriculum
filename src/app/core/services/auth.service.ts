import { Injectable } from '@angular/core';
import { Observable, from, forkJoin } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState: Observable<any> = null;
  user: any = null;

  constructor(
    private router: Router,
    private authFire: AngularFireAuth,
    private userService: UserService
  ) {
    // track user state
    this.authState = this.authFire.authState;
  }

  connection(email: string, password: string): Observable<boolean> {
    this.authState = from(this.authFire.auth.signInWithEmailAndPassword(email, password));
    const users = this.userService.getUsers();

    return forkJoin([this.authState, users])
    .pipe(map(data => {
      const userState = data[0];
      const users = data[1] as any;

      const userExistsInDB = users.findIndex(u => u.email === userState.user.email) >= 0;
      this.user = userExistsInDB ? userState : null;

      return userExistsInDB &&   userState !== null;
    }));
      
  }

  // Returns true if user is logged in
  get authenticated(): Observable<boolean> {
    return this.authState.pipe(map(user => user !== null))
  }

  // Returns current user data as observable
  get currentUser(): Observable<any> {
    return this.authenticated ? this.authState : null;
  }

  logout() {
    this.authFire.auth.signOut();
    this.router.navigate(['/']);
  }
}
