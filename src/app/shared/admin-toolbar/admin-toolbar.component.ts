import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-admin-toolbar',
  templateUrl: './admin-toolbar.component.html',
  styleUrls: ['./admin-toolbar.component.scss']
})
export class AdminToolbarComponent implements OnInit {
  @Output() logout = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
