import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorService } from '../core/services/error.service';
import { AfError } from '../core/enums/af-error';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  group = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.minLength(8), Validators.required])
  })

  constructor(
    private authService: AuthService,
    private router: Router,
    private error: ErrorService
  ) { }

  ngOnInit() {
  }

  submit($event) {
    if (this.group.invalid) {
      alert('invalide');
      return;
    }

    const mail = this.group.value.email;
    const pass = this.group.value.password;
    this.authService.connection(mail, pass).subscribe(connected => {
      if (connected) {
        this.router.navigate(['/admin']);
      } else {
        alert('email ou mdp faux');
      }
    }, error => this.error.handle(error));
  }
}
