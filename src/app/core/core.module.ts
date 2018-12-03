import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';
import { SharedModule } from '../shared/shared.module';
import { ErrorService } from './services/error.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { ProfileService } from './services/profile.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiService,
    ErrorService,
    UserService,
    ProfileService,
    AuthService
  ]
})
export class CoreModule { }
