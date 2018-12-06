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
import { CollapseDirective } from './directives/collapse.directive';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [CollapseDirective],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()

  ],
  providers: [
    ApiService,
    ErrorService,
    UserService,
    ProfileService,
    AuthService
  ], exports: [
    CollapseDirective,
    NgxMaskModule
  ]
})
export class CoreModule { }
