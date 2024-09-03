import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthLoginService {
  private sessionSubject: Subject<string | null> = new Subject<string | null>();

  constructor() {}

  public setSession(userid: string): void {
    localStorage.setItem('session', userid);

    this.sessionSubject.next(userid);
  }

  public getSession(): Observable<string | null> {
    return this.sessionSubject.asObservable();
  }

  public logout(): void {
    localStorage.removeItem('session');
  }
}
