import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ProfileService } from 'src/app/core/services/profile.service';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/core/models/profile';

@Component({
  selector: 'app-admin-toolbar',
  templateUrl: './admin-toolbar.component.html',
  styleUrls: ['./admin-toolbar.component.scss']
})
export class AdminToolbarComponent implements OnInit {
  @Output() logout = new EventEmitter();
  @Output() selectedProfileChange = new EventEmitter();
  @Input() profiles: Observable<Profile>;

  _selectedProfile: Profile;

  @Input() get selectedProfile() {
    return this._selectedProfile;
  }

  set selectedProfile(value: Profile) {
    this._selectedProfile = value;
    this.selectedProfileChange.emit(value);
  }

  compareWith(a: Profile, b: Profile) {
    return a.id === b.id;
  }
}
