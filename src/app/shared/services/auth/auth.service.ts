import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const url = 'https://beta.id90travel.com/session.json';
    return this.httpClient.post<any>(url, { username, password }).pipe(
      tap((res) => {
        if (res.member.id) sessionStorage.setItem('id', res.member.id);
          else {
            //Realizar el manejo del error en caso de Error de Credenciales
            
          }
      })
    );
  }
}
