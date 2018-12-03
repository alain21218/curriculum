import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { UserService } from '../core/services/user.service';
import { map } from 'rxjs/operators';
import { ProfileService } from '../core/services/profile.service';
import { User } from '../core/models/user';
import { Profile } from '../core/models/profile';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private profileService: ProfileService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.profileService.getActiveProfile()
        .pipe(map((profiles: any) => {
          if(!profiles || profiles.length <= 0) {
            this.router.navigate(['/login']);
            return false;
          }

          return true;
        }));
  }
}
