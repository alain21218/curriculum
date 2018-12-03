import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../core/services/user.service';
import { User } from '../core/models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.userService.getUsers().pipe(map((users: any) => {
      if(!users || users.length <= 0) return true

      this.router.navigate(['/']);
      return false;
    }));
  }
}
