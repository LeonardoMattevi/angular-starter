import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbtn',
  template: `
  <span class="form-group">
      <input *ngIf="showInput" class="form-control d-inline-block" type="text" style="vertical-align:middle;width:120px;height:28px;" pleaceholder="search..." />
      <button type="button" class="btn btn-secondary btn-sm" style="vertical-align:middle;"
        (click)="showInputFN(!showInput)">
        <i class="bi bi-search"></i>
      </button>&nbsp;
  </span>
  `,
  styles: [
  ]
})
export class SearchbtnComponent implements OnInit {
  showInput = false;
  constructor() { }

  ngOnInit(): void {}

  showInputFN(state: boolean) {
    this.showInput = state;
  }

}
