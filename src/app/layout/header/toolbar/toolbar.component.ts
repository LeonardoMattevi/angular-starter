import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  template: `
    <!-- Topbar Navbar -->
  <ul class="navbar-nav ml-auto">
    <!-- Nav Item - Search Dropdown (Visible Only XS) -->
    <li class="nav-item dropdown no-arrow" style="white-space:nowrap;">
      <app-searchbtn></app-searchbtn>
    </li>
    <li class="nav-item">
      <a
          class="nav-link"
          href="#"
        >
      <i class="bi bi-bell-fill"></i>
      <!-- Counter - Alerts -->
      <span class="badge badge-danger badge-counter">3+</span>
      </a>
    </li>
    <li class="nav-item">
      <a
          class="nav-link"
          href="#"
        >
        <i class="bi bi-envelope-fill"></i>
        <!-- Counter - Alerts -->
        <span class="badge badge-danger badge-counter">3+</span>
      </a>
    </li>
    
    <li class="nav-item text-light" style="line-height:32px;">
        <span class="d-sm-none d-md-inline-block mr-2" style="vertical-align: middle;">Leonardo Mattevi</span>&nbsp;
        <i class="bi bi-person-circle" style="font-size:1.2rem;vertical-align: middle;"></i>
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
