import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { UserService } from '../core/services/user.service';
import { User } from '../core/models/user';
import { EditProfileService } from './edit-profile/edit-profile.service';
import { Profile } from '../core/models/profile';
import { ProfileService } from '../core/services/profile.service';
import { Observable } from 'rxjs';
import { ErrorService } from '../core/services/error.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  selectedProfile: Profile;
  profiles: Observable<Profile>;

  constructor(
    private authService: AuthService,
    private profileService: ProfileService,
    private editProfileService: EditProfileService,
    private error: ErrorService
  ) { }
  
  ngOnInit() {
    this.profiles = this.profileService.getAllProfiles();
    this.profileService.getActiveProfile().subscribe(profile => {
      this.selectedProfile = profile[0];
    });
  }

  logout() {
    this.authService.logout();
  }

  saveProfile() {
    this.editProfileService.save()
      .subscribe(done => {
        this.profiles = this.profileService.getAllProfiles();
        this.selectedProfile = done;
      }, error => this.error.handle(error));
  }

  removeProfile() {
    this.editProfileService.remove(this.selectedProfile.id)
      .subscribe(done => {
        this.profiles = this.profileService.getAllProfiles();
        this.profiles.subscribe(profiles => this.selectedProfile = profiles[0]);
      }, error => this.error.handle(error))
  }

  newProfile() {
    this.selectedProfile = null;
    this.editProfileService.create();
  }
}
