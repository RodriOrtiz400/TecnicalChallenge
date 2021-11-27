import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as authActions from '../../auth/auth.actions';
import { User } from 'src/app/models/user.model';

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
          var userapp = new User(res.member.id, res.member.first_name, res.member.last_name, res.member.profile_image_url)
          this.store.dispatch( authActions.setUser({ user: userapp}))
          sessionStorage.setItem('id', res.member.id);
        }
      })
    );
  }
}
