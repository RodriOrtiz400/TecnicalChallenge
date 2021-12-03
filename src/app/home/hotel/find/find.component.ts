import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { AppState } from '../../../store/reducers/app.reducers';
import { getHotels } from '../../../store/actions/hotels.actions';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css'],
})
export class FindComponent implements OnInit {
  loading: boolean = false;
  uiSubscrip!: Subscription;
  findForm!: FormGroup;
  rangeForm = this.formBuilder.group({
    start: [''],
    end: [''],
  });

  testVar: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private datePipe: DatePipe
  ) {
    this.findForm = this.formBuilder.group({
      destination: ['', Validators.required],
      range: [''],
      guests: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-5]+$'),
          Validators.min(1),
          Validators.max(4),
        ],
      ],
    });
  }

  ngOnInit(): void {
    this.uiSubscrip = this.store
      .select('ui')
      .subscribe((ui) => (this.loading = ui.isLoading));
  }

  ngOnDestroy() {
    this.uiSubscrip.unsubscribe();
  }

  get destinationValid() {
    return (
      this.findForm.get('destination')?.invalid &&
      this.findForm.get('destination')?.touched
    );
  }

  get guestsValid() {
    return (
      this.findForm.get('guests')?.invalid &&
      this.findForm.get('guests')?.touched
    );
  }

  testFunction() {
    this.testVar = 'notEmpty';
  }

  getHotels() {
    const checkin = this.datePipe.transform(
      this.rangeForm.controls['start'].value,
      'YYYY-MM-dd'
    );
    const checkout = this.datePipe.transform(
      this.rangeForm.controls['end'].value,
      'YYYY-MM-dd'
    );
    const { destination, guests } = this.findForm.value;
    if (checkin && checkout) {
      this.store.dispatch(
        getHotels({ destination, checkin, checkout, guests })
      );
    }
  }
}
