import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FontawesomeModule } from './fontawesome/fontawesome.module';
import { AdminToolbarComponent } from './admin-toolbar/admin-toolbar.component';

@NgModule({
  declarations: [AdminToolbarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FontawesomeModule
  ], exports: [
    MaterialModule,
    FontawesomeModule,
    AdminToolbarComponent
  ]
})
export class SharedModule { }
