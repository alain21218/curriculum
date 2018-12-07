import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/core/models/profile';
import { EditProfileService } from '../edit-profile/edit-profile.service';
import { ErrorService } from 'src/app/core/services/error.service';
import { EditSkillsService } from '../edit-skills/edit-skills.service';

@Component({
  selector: 'app-admin-toolbar',
  templateUrl: './admin-toolbar.component.html',
  styleUrls: ['./admin-toolbar.component.scss']
})
export class AdminToolbarComponent implements OnInit {
  @Output() logout = new EventEmitter();
  @Output() save = new EventEmitter();
  @Output() selectedProfileChange = new EventEmitter();
  @Output() remove = new EventEmitter();
  @Output() new = new EventEmitter();
  @Input() profiles: Observable<Profile>;

  _selectedProfile: Profile;

  constructor(
    private editProfileService: EditProfileService,
    private editSkillsService: EditSkillsService,
    private error: ErrorService
  ) {}
   
  ngOnInit(){}

  @Input() get selectedProfile() {
    return this._selectedProfile;
  }

  set selectedProfile(value: Profile) {
    this._selectedProfile = value;
    this.selectedProfileChange.emit(value);
  }

  removeProfile() {
    if(!confirm('Supprimer ?')) {
      return;
    }

    this.remove.emit();
  }

  newProfile() {
    this.new.emit();
  }

  saveProfile() {
    this.save.emit();
  }

  compareWith(a: Profile, b: Profile) {
    return a && b && a.id === b.id;
  }
}
