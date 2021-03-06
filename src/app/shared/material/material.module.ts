import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatStepperModule, MatToolbarModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatSlideToggleModule, MatSliderModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], exports: [
    MatButtonModule,
    MatCardModule,
    MatStepperModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatSliderModule
  ], providers: [
    MatDatepickerModule
  ]
})
export class MaterialModule { }
