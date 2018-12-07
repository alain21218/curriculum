import { Injectable, Input } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Skill } from 'src/app/core/models/skill';
import { EditProfileService } from '../edit-profile/edit-profile.service';
import { SkillsService } from 'src/app/core/services/skills.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditSkillsService {

  group = new FormGroup({
    skills: new FormArray([])
  });

  constructor(private skillsService: SkillsService) {
    this.addSkill();
  }

  addSkill() {
    this.skills.push(
      new FormGroup({
        title: new FormControl(),
        subtitle: new FormControl(),
        score: new FormControl()
      })
    );
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  makeSkills(profileId: number): Skill[] {
    const skills = [];

    Object.assign(skills, this.skills.value);
    skills.map(skill => skill.profileId = profileId);

    return skills;
  }

  getSkills(profileId: number) {
    return this.skillsService.getSkills(profileId);
  }

  updateForm(skills: Skill[]) {
    this.skills.patchValue(skills);
  }

  get skills(): FormArray {
    return this.group.controls.skills as FormArray;
  }
}
