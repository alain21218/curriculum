import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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
  profiles: Observable<Profile>

  constructor(public profileService: ProfileService) { }

  ngOnInit() {
    this.profiles = this.profileService.getAllProfiles();
  }
}
