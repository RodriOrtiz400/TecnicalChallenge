import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '../../store/reducers/app.reducers';
import * as ui from '../../store/actions/ui.actions';
import { uiReducer } from '../../store/reducers/ui.reducers';


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
    this.store.dispatch(ui.stopLoading());
    this.router.navigateByUrl('/auth');
  }
}
