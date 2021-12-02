import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { logIn, logInSucces, logInError } from '../actions';
import { AuthService } from '../../services/auth/auth.service';
import { catchError, mergeMap, map, of } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import * as ui from '../../store/actions/ui.actions';
import { User } from '../../models/user.model';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {}
  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logIn),
      mergeMap((action) =>
        this.authService
          .login(action.username, action.password, action.airline)
          .pipe(
            map((res) => {
              var userapp = new User(
                res.member.id,
                res.member.first_name,
                res.member.last_name,
                res.member.profile_image_url
              );
              this.store.dispatch(ui.stopLoading());
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                showConfirmButton: false,
                timer: 1000,
              });
              this.router.navigateByUrl('/home');
              return logInSucces({ user: userapp });
            }),
            catchError((error) => {
              this.store.dispatch(ui.stopLoading());
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'There is a problem with your credentials',
              });
              return of(logInError({ payload: error.message }));
            })
          )
      )
    )
  );
}
