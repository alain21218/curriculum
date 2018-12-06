import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/core/services/profile.service';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/core/models/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  activeProfile: Observable<Profile>;

  constructor(
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.activeProfile = this.profileService.getActiveProfile();
  }

}
