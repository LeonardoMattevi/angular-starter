import { Component, OnInit } from '@angular/core';
import { MenuService } from '../aside/menu/menu.service';

@Component({
  selector: 'app-header',
  template: `
    <header id="app-header">
      <nav class="navbar navbar-expand navbar-dark bg-dark topbar static-top shadow mb-0">
        <button type="button" 
          class="btn btn-seconary rounded-circle mr-3 text-light"
          (click)="menuService.toggleMenu()">
          <i class="bi bi-list"></i>
        </button>  

        <a href="/" class="d-block d-flex align-items-center justify-content-center mr-2">
          <img height="32px" class="app-logo" src="./assets/img/logo-social-sq.png" title="logo" />
        </a>

        <app-toolbar></app-toolbar>
      </nav>
    </header>
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor(public menuService: MenuService) { }

  ngOnInit(): void {
  }

}
