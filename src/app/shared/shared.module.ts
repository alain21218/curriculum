import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FontawesomeModule } from './fontawesome/fontawesome.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    FontawesomeModule
  ], exports: [
    MaterialModule,
    FontawesomeModule,
  ]
})
export class SharedModule { }
