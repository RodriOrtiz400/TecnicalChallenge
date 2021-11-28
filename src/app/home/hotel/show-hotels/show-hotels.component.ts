import { Component, OnDestroy, OnInit } from '@angular/core';

import { HotelService } from '../../../services/hotel/hotel.service';

@Component({
  selector: 'app-show-hotels',
  templateUrl: './show-hotels.component.html',
  styleUrls: ['./show-hotels.component.css'],
})
export class ShowHotelsComponent implements OnInit, OnDestroy {
  hotels: any[] = [];

  constructor(private hotelServ: HotelService) {}

  ngOnInit(): void {
    this.hotels = this.hotelServ.hotels;
  }

  ngOnDestroy() {}
}
