import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '../../store/reducers/app.reducers';
import * as actions from '../../store/actions';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private store: Store<AppState>,
    ) {}

  ngOnInit(): void {}

  ngOnDestroy() {
    sessionStorage.clear();
  }

  logout() {
    this.store.dispatch(actions.stopLoading());
    this.store.dispatch(actions.logoutAuth());
    this.store.dispatch(actions.logoutHotels());
    this.store.dispatch(actions.logoutHotel());

    this.router.navigateByUrl('/auth');
  }
}
