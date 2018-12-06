import { Component, OnInit, Input } from '@angular/core';
import { EditProfileService } from './edit-profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  constructor(private editProfileService: EditProfileService) { }

  ngOnInit() {
  }

  get saved(): boolean {
    return this.editProfileService.baseProfile != null;
  }
}
