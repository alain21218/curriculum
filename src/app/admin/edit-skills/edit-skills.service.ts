import { Injectable } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Skill } from 'src/app/core/models/skill';

@Injectable({
  providedIn: 'root'
})
export class EditSkillsService {
  group = new FormGroup({
    skills: new FormArray([])
  });

  constructor() {
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

  makeSkills(): Skill[] {
    const skills = [];

    Object.assign(skills, this.skills.value);

    return skills;
  }

  get skills(): FormArray {
    return this.group.controls.skills as FormArray;
  }
}
