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

  getHotels(destination: string, checkin: string , checkout: string, guests: number): Observable<any> {
    const url = `https://beta.id90travel.com/api/v1/hotels.json?guests[]=${guests}&checkin=${checkin}&checkout=${checkout}&destination=${destination}&keyword&rooms=1&longitude&latitude&sort_criteria=Overall&sort_order=desc&per_page=25&page=1&currency=USD&price_low&price_high`
    return this.httpClient.get<any>(url).pipe(
      tap((res) => {
        if (res.hotels) {
          this.hotels = res.hotels
        }
      })
    );
  }

}
