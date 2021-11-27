import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  hotels: any[]=[];

  constructor(
    private httpClient: HttpClient, 

  ) { }

  find(destination: string, checkin: string = '2020-10-24', checkout:string = '2020-10-25', guests: number): Observable<any> {
    const url = `https://beta.id90travel.com/api/v1/hotels.json?guests[]=${guests}&checkin=${checkin}&checkout=${checkout}&destination=${destination}&keyword&rooms=1&longitude&latitude&sort_criteria=Overall&sort_order=desc&per_page=25&page=1&currency=USD&price_low&price_high`
    return this.httpClient.get<any>(url).pipe(
      tap((res) => {
        if (res.hotels) {
          console.log(res.hotels[0].name);
          this.hotels = res.hotels
          //this.store.dispatch( authActions.setUser({ user: userapp}))
          //sessionStorage.setItem('id', res.member.id);
        }
      })
    );
  }

}
