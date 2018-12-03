import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { UserService } from '../core/services/user.service';
import { User } from '../core/models/user';
import { EditProfileService } from './edit-profile/edit-profile.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    private authService: AuthService,
    public editProfileService: EditProfileService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

  apply() {
    this.editProfileService.save()
      .subscribe(done => {

      }, error => alert('pas sauvegardé car erreur'));
  }
}
