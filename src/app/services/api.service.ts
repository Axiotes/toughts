import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../types/user.type';
import { ResponseAuth } from '../types/response-auth.type';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private urlApi = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public register(user: User) {
    return this.http.post<ResponseAuth>(`${this.urlApi}/register`, user);
  }

  public login(user: User) {
    return this.http.post<ResponseAuth>(`${this.urlApi}/login`, user);
  }
}
