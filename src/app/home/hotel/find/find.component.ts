import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

import * as ui from '../../../store/actions/ui.actions';
import { HotelService } from '../../../services/hotel/hotel.service';
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

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private router: Router,
    private hotelServ: HotelService,
    private datePipe: DatePipe
  ) {
    this.findForm = this.formBuilder.group({
      destination: ['', Validators.required],
      range: [''],
      guests: ['', [Validators.required, Validators.min(1), Validators.max(4)]],
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

  getHotels() {
    this.store.dispatch(ui.isLoading());
    const checkin = this.datePipe.transform(
      this.rangeForm.controls['start'].value,
      'YYYY-MM-dd'
    );
    const checkout = this.datePipe.transform(
      this.rangeForm.controls['end'].value,
      'YYYY-MM-dd'
    );
    const values = this.findForm.value;
    if (checkin && checkout) { /* Bloque reemplazado por Effects
      this.hotelServ
        .getHotels(
          values.destination,
          checkin,
          checkout,
          values.guests as number
        )
        .subscribe(
          (res) => {
            if (res.hotels[0].name) {
              this.store.dispatch(ui.stopLoading());
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                showConfirmButton: false,
                timer: 500,
              });
              this.router.navigateByUrl('/home/hotels/showHotels');
            }
          },
          (error) => {
            this.store.dispatch(ui.stopLoading());
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'There is a problem with user or password',
            });
          }
        ); */

        this.store.dispatch( getHotels() )
    }
  }
}
