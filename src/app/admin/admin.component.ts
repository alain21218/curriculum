import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { UserService } from '../core/services/user.service';
import { User } from '../core/models/user';
import { EditProfileService } from './edit-profile/edit-profile.service';
import { Profile } from '../core/models/profile';
import { ProfileService } from '../core/services/profile.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  selectedProfile: Profile;

  constructor(
    private authService: AuthService,
    private profileService: ProfileService,
    public editProfileService: EditProfileService
  ) { }

  ngOnInit() {
    this.profileService.getActiveProfile().subscribe(profile => {
      this.selectedProfile = profile[0];
    });
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
