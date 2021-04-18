import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  template: `
    <div class="dropdown"> <!-- click-outside="closeDropdown" -->
      <a
        class="nav-link dropdown-toggle"
        (click)="privShowBody=!privShowBody"
        style="cursor: pointer;"
      >
        <ng-content select="[label]"></ng-content>
      </a>
      <!-- Dropdown - User Information -->
      <div class="dropdown-menu dropdown-menu-right shadow" [class]="{'show': privShowBody}">
        <ng-content select="[body]"></ng-content>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class DropdownComponent implements OnInit {
  privShowBody = false;
  constructor() { }

  ngOnInit(): void {
  }

  closeDropdown() {
    this.privShowBody = false;
  }
}
