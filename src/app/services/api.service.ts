import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../types/user.type';
import { ResponseAuth } from '../types/response-auth.type';
import { Tought } from '../types/tought.type';

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

  public allToughts(search: string) {
    return this.http.get<Tought[]>(`${this.urlApi}/toughts/${search}`);
  }
}
