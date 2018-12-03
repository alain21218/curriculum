import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { UserService } from '../core/services/user.service';
import { User } from '../core/models/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }
}
