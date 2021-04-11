import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="bg-secondary text-white p-3 clearfix">
      <div class="float-right">
          © {{currentYear}} Leonardo s.r.l.
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {
  public currentYear: number;
  constructor() {}

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }

}
