import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AirlineService {
  listHotels!: any[];

  constructor(private httpClient: HttpClient) {}

  getAirlines(): Observable<any> {
    const url = ' https://beta.id90travel.com/airlines';
    return this.httpClient
      .get<any>(url)
      .pipe(map((res: any[]) => res.map((airline) => airline.display_name)));
  }
}
