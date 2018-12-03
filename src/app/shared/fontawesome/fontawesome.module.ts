import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPowerOff, faKey } from '@fortawesome/free-solid-svg-icons';

library.add(faPowerOff);
library.add(faKey);


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], exports: [
    FontAwesomeModule
  ]
})
export class FontawesomeModule { }
