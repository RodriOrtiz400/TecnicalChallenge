import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from '../store/reducers';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  id!: number;
  constructor(private router: Router, private store: Store<AppState>) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.store.select('auth').subscribe((user)=>{
      this.id = user.user
    }); //TODO FIX THIS
    if (this.id) return true;
    else {
      this.router.navigateByUrl('/auth');
      return false;
    }
  }
}
