import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../types/user.type';
import { ResponseAuth } from '../types/response-auth.type';
import { AllTought } from '../types/all-tought.type';
import { MyToughts } from '../types/my-toughts.type';
import { ResponseTought } from '../types/response-tought.type';

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
    return this.http.get<AllTought[]>(`${this.urlApi}/toughts/${search}`);
  }

  public dashboard(userId: number) {
    return this.http.get<MyToughts>(
      `${this.urlApi}/toughts/dashboard/${userId}`
    );
  }

  public createTought(newTought: { title: string; userId: number }) {
    return this.http.post<ResponseTought>(
      `${this.urlApi}/toughts/add/${newTought.userId}`,
      newTought
    );
  }

  public removeTought(id: number, userId: number) {
    return this.http.post<ResponseTought>(`${this.urlApi}/toughts/remove/${userId}`, {
      id,
      userId,
    });
  }
}
