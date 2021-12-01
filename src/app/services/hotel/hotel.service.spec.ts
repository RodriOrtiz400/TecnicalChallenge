import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HotelService } from './hotel.service';
import { StoreModule } from '@ngrx/store';

describe('HotelService', () => {
  let service: HotelService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, StoreModule.forRoot({})],
    });
    service = TestBed.inject(HotelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
