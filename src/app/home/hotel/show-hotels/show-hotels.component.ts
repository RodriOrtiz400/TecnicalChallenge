import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/reducers';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-show-hotels',
  templateUrl: './show-hotels.component.html',
  styleUrls: ['./show-hotels.component.css'],
})
export class ShowHotelsComponent implements OnInit, OnDestroy {
  hotels: any[] = [];
  loadingHotels: boolean = false;

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.select('hotels').subscribe((hotels) => {
      this.hotels = hotels.hotels;
    });
  }

  ngOnDestroy() {}
}
