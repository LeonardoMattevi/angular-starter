import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  template: `
    <!-- Topbar Navbar -->
    <ul class="navbar-nav navbar-dark text-light">
      <li class="nav-item pt-1">
        <app-searchbtn></app-searchbtn>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <app-dropdown>
          <span label>
            <span class="mr-2">Leonardo Mattevi</span>&nbsp;
            <i class="bi bi-person-circle"></i>
          </span>
          <div body>
            <a class="dropdown-item" to="/profile">
              <i class="bi bi-person-circle text-gray-400"></i>
              Profile
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              <i class="bi bi-box-arrow-right text-gray-400"></i>
              Logout
            </a>
          </div>
        </app-dropdown>
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
