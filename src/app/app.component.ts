import { Component } from '@angular/core';
import { MenuService } from './layout/aside/menu/menu.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-header></app-header>
      <div id="middle-contanier" [class.asideOpened]="menuService.isOpen" >
        <app-aside></app-aside>
        <main>
          <router-outlet></router-outlet>
        </main>
      </div>
      <app-footer></app-footer>
    </div>
  `,
  styles: [``],
})
export class AppComponent {
  constructor(public menuService: MenuService){}
  title = 'angular-starter';
}
