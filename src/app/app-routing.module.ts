import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterGuard } from './register/register.guard';
import { HomeGuard } from './home/home.guard';
import { LoginGuard } from './login/login.guard';
import { AdminGuard } from './admin/admin.guard';

const routes: Routes = [
  { path: 'register', loadChildren: './register/register.module#RegisterModule', canActivate: [RegisterGuard] },
  { path: 'login', loadChildren: './login/login.module#LoginModule', canActivate: [LoginGuard] },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule', canActivate: [AdminGuard] },
  { path: '', loadChildren: './home/home.module#HomeModule', canActivate: [HomeGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
