import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="p-3">
      home works!<br>
      <span class="d-inline-block p-3" appHighlight>{{"!skrow epip" | reverseString}}</span>
    </div>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
