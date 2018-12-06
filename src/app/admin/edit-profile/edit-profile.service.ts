import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProfileService } from 'src/app/core/services/profile.service';
import { Profile } from 'src/app/core/models/profile';

@Injectable({
  providedIn: 'root'
})
export class EditProfileService {

  baseProfile: Profile;

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
    active: new FormControl()
  });

  updateForm(profile: Profile) {
    if(!this.group || !profile) {
      return;
    }

    this.baseProfile = profile;
    this.group.patchValue(profile);
  }

  constructor(private profileService: ProfileService) { }

  save() {
    const profile = this.makeProfile();
    if(profile.id) {
      return this.profileService.updateProfile(this.makeProfile());
    }
    return this.profileService.createProfile(this.makeProfile());
  }

  create() {
    this.baseProfile = null;
    this.group.reset();
  }

  private makeProfile(): Profile {
    const profile = new Profile();

    Object.assign(profile, this.group.value);
    profile.id = this.baseProfile ? this.baseProfile.id : null;

    if(profile.active) {
      this.disableAllProfiles(profile.id);
    }

    return profile;
  }

  remove(id: number) {
    return this.profileService.removeProfile(id);
  }

  disableAllProfiles(exceptId: number) {
    this.profileService.getActiveProfile().subscribe(
      profiles => profiles.forEach(profile => {
        profile.active = (profile.id === exceptId);
        this.profileService.updateProfile(profile).subscribe();
      })
    )
  }
}
