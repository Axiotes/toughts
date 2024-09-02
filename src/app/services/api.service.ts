import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../types/user.type';
import { ResponseRegister } from '../types/response-register.type';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private urlApi = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public checkLogged(): Observable<any> {
    return this.http.get(`${this.urlApi}/logged-in`);
  }

  public register(user: User) {
    return this.http.post<ResponseRegister>(`${this.urlApi}/register`, user);
  }
}
