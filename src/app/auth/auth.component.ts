import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { AirlineService } from '../services/airline/airline.service';
import { logIn } from '../store/actions/auth.actions';
import * as ui from '../store/actions/ui.actions';
import { AppState } from '../store/reducers/app.reducers';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit, OnDestroy {
  authForm: FormGroup;
  public airlines: any[] = [];
  loading: boolean = false;
  uiSubscrip!: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private airline: AirlineService,
    private store: Store<AppState>
  ) {
    this.authForm = this.formBuilder.group({
      airline: ['HAWAIIAN AIRLINES (HA)'],
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  ngOnInit(): void {
    this.airline.getAirlines().subscribe((airlineNames) => {
      this.airlines = airlineNames;
    });
    this.uiSubscrip = this.store
      .select('ui')
      .subscribe((ui) => (this.loading = ui.isLoading));
  }

  ngOnDestroy() {
    this.uiSubscrip.unsubscribe();
  }

  get usernameValid() {
    return (
      this.authForm.get('username')?.invalid &&
      this.authForm.get('username')?.touched
    );
  }

  get passwordValid() {
    return (
      this.authForm.get('password')?.invalid &&
      this.authForm.get('password')?.touched
    );
  }

  login() {
    this.store.dispatch(ui.isLoading());
    const { username, password, airline } = this.authForm.value;
    this.store.dispatch(logIn({ username, password, airline }));
  }
}
