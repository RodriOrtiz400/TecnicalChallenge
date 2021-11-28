import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, map, of } from 'rxjs';

import { getHotels, getHotelsSucces, getHotelsError } from '../actions/hotels.actions';
import { HotelService } from '../../services/hotel/hotel.service';

@Injectable()
export class HotelsEffects {
  constructor(
      private actions$: Actions,
      private hotelService: HotelService  
    ) {}

  getHotels$ = createEffect(
    () => this.actions$.pipe(
        ofType( getHotels ),
        mergeMap(
            (action) => this.hotelService.getHotels( action.destination, action.checkin, action.checkout, action.guests  )
                .pipe(
                    map( hotels => getHotelsSucces( { hotels } )), 
                    catchError( error => of ( getHotelsError( { payload:error } )))
                )
        )
    )
  );
}
