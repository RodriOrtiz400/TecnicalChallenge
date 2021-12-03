import { TestBed } from '@angular/core/testing';

import { HotelsGuard } from './hotels.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

describe('HotelsGuard', () => {
  let guard: HotelsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, StoreModule.forRoot({})],
    });
    guard = TestBed.inject(HotelsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
