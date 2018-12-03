import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditSkillsComponent } from './edit-skills/edit-skills.component';
import { EditEducationComponent } from './edit-education/edit-education.component';
import { EditExperienceComponent } from './edit-experience/edit-experience.component';
import { EditProjectsComponent } from './edit-projects/edit-projects.component';
import { EditHobbiesComponent } from './edit-hobbies/edit-hobbies.component';
import { EditProfileService } from './edit-profile/edit-profile.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminComponent, EditProfileComponent, EditSkillsComponent, EditEducationComponent, EditExperienceComponent, EditProjectsComponent, EditHobbiesComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    CoreModule,
    ReactiveFormsModule
  ],
  exports: [],
  providers: [EditProfileService]
})
export class AdminModule { }
