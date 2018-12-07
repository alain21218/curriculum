import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Skill } from '../models/skill';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private api: ApiService) { }

  createSkills(skills: Skill[]): Observable<any> {
    const skillsAdded = []; 

    skills.forEach(skill => {
      skillsAdded.push(this.createSkill(skill)); 
    });

    return forkJoin(skillsAdded);
  }

  createSkill(skill: Skill): Observable<any> {
    return this.api.post('/skills', skill);
  }

  getSkills(profileId: number): Observable<any> {
    return this.api.get('/skills?profileId=' + profileId);
  }
}
