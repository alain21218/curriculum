import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState: Observable<any> = null;
  user: any = null;

  constructor(
    private router: Router,
    private authFire: AngularFireAuth
  ) {
    // track user state
    this.authState = this.authFire.authState;
  }

  connection(email: string, password: string): Observable<boolean> {
    this.authState = from(this.authFire.auth.signInWithEmailAndPassword(email, password));

    return this.authState
      .pipe(map(user => {
        this.user = user;
        return user !== null;
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
