import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users$= new Observable<any>();

  constructor(private http: HttpClient) { }

  getUsers() {
    this.users$ = this.http.get('https://reqres.in/gigi');
  }
}
