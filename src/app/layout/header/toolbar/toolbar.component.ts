import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  template: `
    <!-- Topbar Navbar -->
  <ul class="navbar-nav ml-auto">
    <!-- Nav Item - Search Dropdown (Visible Only XS) -->
    <li class="nav-item dropdown no-arrow">
      <a
        class="nav-link"
        href="#"
      >
        <i class="bi bi-search"></i>
      </a>
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
        <span class="mr-2" style="vertical-align: middle;">Leonardo Mattevi</span>&nbsp;
        <i class="bi bi-person-circle" style="font-size:1.2rem;vertical-align: middle;"></i>
    </li>

    <!-- Nav Item - Messages -->
    <!-- <li class="nav-item mx-1">
      <cmp-dropdown>
        <template v-slot:label>
          <i class="bi bi-envelope fa-fw"></i>
          <span class="badge badge-danger badge-counter">7</span>
        </template>
        <template v-slot:body>
          <h6 class="dropdown-header">Message Center</h6>
          <a class="dropdown-item" href="#">
            <div class="font-weight-bold">
              <div
                class="text-truncate"
              >Hi there! I am wondering if you can help me with a problem I've been having.</div>
              <div class="small text-gray-500">Emily Fowler · 58m</div>
            </div>
          </a>
          <a class="dropdown-item" href="#">
            <div>
              <div
                class="text-truncate"
              >I have the photos that you ordered last month, how would you like them sent to you?</div>
              <div class="small text-gray-500">Jae Chun · 1d</div>
            </div>
          </a>
          <a class="dropdown-item" href="#">
            <div>
              <div
                class="text-truncate"
              >Last month's report looks great, I am very happy with the progress so far, keep up the good work!</div>
              <div class="small text-gray-500">Morgan Alvarez · 2d</div>
            </div>
          </a>
          <a class="dropdown-item" href="#">
            <div>
              <div
                class="text-truncate"
              >Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</div>
              <div class="small text-gray-500">Chicken the Dog · 2w</div>
            </div>
          </a>
          <a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
        </template>
      </cmp-dropdown>
    </li> -->

    <!-- Nav Item - User Information -->
    <!-- <li class="nav-item mx-1">
      <cmp-dropdown>
        <template v-slot:label>
          <span class="mr-2 d-none d-lg-inline small">Leonardo Mattevi</span>&nbsp;
          <span class="border border-secondary rounded-circle user-align">
            <i class="fa fa-user"></i>
          </span>
        </template>
        <template v-slot:body>
          <a class="dropdown-item" href="#">
            <i class="bi bi-user fa-sm fa-fw mr-2 text-gray-400"></i>
            Profile
          </a>
          <a class="dropdown-item" href="#">
            <i class="bi bi-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
            Settings
          </a>
          <a class="dropdown-item" href="#">
            <i class="bi bi-list fa-sm fa-fw mr-2 text-gray-400"></i>
            Activity Log
          </a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
            <i class="bi bi-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
            Logout
          </a>
        </template>
      </cmp-dropdown>
    </li> -->
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
