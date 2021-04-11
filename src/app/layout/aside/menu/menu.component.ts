import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
  <div class="navbar-nav">
    <hr class="sidebar-divider my-0" />

    <div class="nav-item">
      <a class="nav-link p-3" href="/">
        <i class="bi bi-speedometer"></i><span class="menu-label">&nbsp;Dashboard</span>
      </a>
    </div>

    <hr class="sidebar-divider" />

    <div class="sidebar-heading pl-3 pr-3">Services</div>

    <div class="nav-item">
      <a class="nav-link p-3" href="/service-name">
        <i class="bi bi-caret-right-square"></i><span class="menu-label">&nbsp;Service name</span>
      </a>
    </div>
  </div>
  `,
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
