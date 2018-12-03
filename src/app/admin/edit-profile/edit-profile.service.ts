import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProfileService } from 'src/app/core/services/profile.service';
import { Profile } from 'src/app/core/models/profile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditProfileService {

  group = new FormGroup({
    title: new FormControl(),
    firstname: new FormControl(),
    lastname: new FormControl(),
    birthday: new FormControl(),
    address: new FormControl(),
    availability: new FormControl(),
    scope: new FormControl(),
    license: new FormControl(),
    jobTitle: new FormControl(),
    facebook: new FormControl(),
    linkedin: new FormControl(),
    email: new FormControl(),
  });

  constructor(private profileService: ProfileService) { }

  save() {
    return this.profileService.updateProfile(this.makeProfile());
  }

  private makeProfile(): Profile {
    const profile = new Profile();

    Object.assign(profile, this.group.value);

    return profile;
  }
}
