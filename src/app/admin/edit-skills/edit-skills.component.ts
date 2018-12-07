import { Component, OnInit, Input } from '@angular/core';
import { EditSkillsService } from './edit-skills.service';
import { FormGroup } from '@angular/forms';
import { SkillsService } from 'src/app/core/services/skills.service';
import { Observable } from 'rxjs';
import { Skill } from 'src/app/core/models/skill';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.scss']
})
export class EditSkillsComponent implements OnInit {
  @Input() profileId: number;
  skills: Observable<Skill[]>;

  constructor(
    private editSkillService: EditSkillsService,
    private skillsService: SkillsService
  ) { }

  ngOnInit() {
    this.skillsService.getSkills(this.profileId)
      .subscribe(skills => {
        this.skills = skills;
        this.editSkillService.updateForm(skills);
      });
  }

  addSkill() {
    this.editSkillService.addSkill();
  }

  get group(): FormGroup { return this.editSkillService.group; }

}
