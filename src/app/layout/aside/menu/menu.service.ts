import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  isOpen: boolean = true;
  constructor() { }

  toggleMenu() {
    this.isOpen = !this.isOpen; 
  }
}
