import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as authActions from '../../auth/auth.actions';
//import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor( 
    private httpClient: HttpClient, 
    private store: Store<AppState>
    ) {}

  login(username: string, password: string): Observable<any> {
    const url = 'https://beta.id90travel.com/session.json';
    return this.httpClient.post<any>(url, { username, password }).pipe(
      tap((res) => {
        if (res.member.id) {
          //const user = User.userFromDb ( res.member )
          this.store.dispatch( authActions.setUser({ user: res.member }))
          sessionStorage.setItem('id', res.member.id);
        }
      })
    );
  }
}
