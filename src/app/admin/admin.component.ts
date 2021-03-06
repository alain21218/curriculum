import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { EditProfileService } from './edit-profile/edit-profile.service';
import { Profile } from '../core/models/profile';
import { ProfileService } from '../core/services/profile.service';
import { Observable, forkJoin } from 'rxjs';
import { ErrorService } from '../core/services/error.service';
import { SkillsService } from '../core/services/skills.service';
import { EditSkillsService } from './edit-skills/edit-skills.service';
import { Skill } from '../core/models/skill';

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
    private skillsService: SkillsService,
    private editSkillsService: EditSkillsService,
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
      .subscribe(profile => {
        const otherInfos = [];

        otherInfos.push(this.createSkills(profile.id));

        forkJoin(otherInfos).subscribe(otherInfos => {
          this.profiles = this.profileService.getAllProfiles();
          this.selectedProfile = profile;
        });
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

  createSkills(profileId: number): Observable<Skill[]> {
    return this.skillsService.createSkills(this.editSkillsService.makeSkills(profileId));
  }

  selectionChanged(selectedProfile: Profile) {
    this.selectedProfile = selectedProfile;
    this.editProfileService.updateForm(selectedProfile);

    if(selectedProfile) {
      this.skillsService.getSkills(selectedProfile.id).subscribe(
        skills => this.editSkillsService.updateForm(skills)
      )
    }else {
      this.editSkillsService.group.reset();
    }
  }
}
