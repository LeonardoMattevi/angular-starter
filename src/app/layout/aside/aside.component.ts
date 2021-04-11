import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  template: `
    <aside class="b-sidebar shadow bg-primary text-light">
      <app-menu></app-menu>

      <hr class="sidebar-divider" />

      <div class="text-center border m-3 p-2 rounded" style="opacity:0.8;font-size:0.7rem;">
        Text for<br />say something...
      </div>
    </aside>
  `,
  styles: [
  ]
})
export class AsideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
