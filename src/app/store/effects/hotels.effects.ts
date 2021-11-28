import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, tap, map, of } from 'rxjs';

import { HotelService } from '../../services/hotel/hotel.service';
import { getHotels, getHotelsSucces, getHotelsError } from '../actions/hotels.actions';
import { getHotel, getHotelSucces, getHotelError } from '../actions/hotel.actions';

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
                    catchError( error => of ( getHotelsError( { payload: error } )))
                )
        )
    )
  );

  getHotel$ = createEffect(
    () => this.actions$.pipe(
        ofType( getHotel ),
        mergeMap(
            (action) => this.hotelService.getHotelById( action.id )
                .pipe(
                    map( hotel => getHotelSucces(hotel)), 
                    catchError( error => of ( getHotelError( { payload: error } )))
                )
        )
    )
  );

}
