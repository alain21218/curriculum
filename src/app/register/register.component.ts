import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../core/services/user.service';
import { ErrorService } from '../core/services/error.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  group = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.minLength(8), Validators.required]),
    confirmation: new FormControl(null, [Validators.required])
  })

  constructor(
    private userService: UserService,
    private error: ErrorService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  submit($event) {
    if (this.group.invalid) {
      alert('Le formulaire n`est pas valide');
      return;
    }

    this.userService.createUser(this.group.value.email, this.group.value.password).subscribe(
      done => this.router.navigate(['/admin']),
      error => this.error.handle(error)
    )
  }

}
