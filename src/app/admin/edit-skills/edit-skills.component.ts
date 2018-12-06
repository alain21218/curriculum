import { Component, OnInit } from '@angular/core';
import { EditSkillsService } from './edit-skills.service';
import { FormGroup } from '@angular/forms';
import { SkillsService } from 'src/app/core/services/skills.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.scss']
})
export class EditSkillsComponent implements OnInit {

  constructor(
    private editSkillService: EditSkillsService,
    private skillsService: SkillsService
  ) { }

  ngOnInit() {
  }

  addSkill() {
    this.editSkillService.addSkill();
  }

  get group(): FormGroup { return this.editSkillService.group; }

}
