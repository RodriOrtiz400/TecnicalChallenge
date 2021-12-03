import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducers/app.reducers';

@Injectable({
  providedIn: 'root',
})
export class HotelsGuard implements CanLoad {
  constructor(private router: Router, private store: Store<AppState>) {}

  canLoad(route: Route, segments: UrlSegment[]): any {
    const subscription = new Observable((ob) => {
      this.store
        .select('hotels')
        .pipe(take(1))
        .subscribe((state) => {
          ob.next(state.hotels?.length > 1);
        });
    });
  }
}
