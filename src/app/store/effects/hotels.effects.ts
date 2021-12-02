import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, map, of } from 'rxjs';

import { HotelService } from '../../services/hotel/hotel.service';
import {
  getHotels,
  getHotelsSucces,
  getHotelsError,
} from '../actions/hotels.actions';
import {
  getHotel,
  getHotelSucces,
  getHotelError,
} from '../actions/hotel.actions';
import { isLoading } from '../actions/ui.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import * as ui from '../../store/actions/ui.actions';

@Injectable()
export class HotelsEffects {
  constructor(
    private actions$: Actions,
    private hotelService: HotelService,
    private store: Store<AppState>,
    private router: Router
  ) {}
  getHotels$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getHotels),
      mergeMap((action) =>
        this.hotelService
          .getHotels(
            action.destination,
            action.checkin,
            action.checkout,
            action.guests
          )
          .pipe(
            map((res) => {
              this.store.dispatch(isLoading());
              this.router.navigateByUrl('/home/hotels/showHotels');
              return getHotelsSucces({ hotels: res.hotels });
            }),
            catchError((error) => {
              this.store.dispatch(ui.stopLoading());
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'There is a problem, please try again',
              });
              return of(getHotelsError({ payload: error.message }));
            })
          )
      )
    )
  );

  getHotel$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getHotel),
      mergeMap((action) =>
        this.hotelService.getHotelById(action.id).pipe(
          map((hotel) => getHotelSucces(hotel)),
          catchError((error) => of(getHotelError({ payload: error })))
        )
      )
    )
  );
}
