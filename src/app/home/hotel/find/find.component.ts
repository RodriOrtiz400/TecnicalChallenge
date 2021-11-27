import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../../../app.reducer';
import * as ui from '../../../shared/ui.actions';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { HotelService } from '../../../services/hotel/hotel.service';


@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
  loading: boolean = false;
  uiSubscrip!: Subscription;


  findForm!: FormGroup;
  picker: any;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private router: Router,
    private hotelServ: HotelService,


  ){
    this.findForm = this.formBuilder.group({
      destination: [''/*, [Validators.required, Validators.minLength(4)]*/],
      guests: [''/*, [Validators.required, Validators.minLength(4)]*/],
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

  findHotels() {
    this.store.dispatch(ui.isLoading());    
    const values = this.findForm.value;
    this.hotelServ.find(values.destination, undefined, undefined, values.guests as number).subscribe(
      (res) => {
        if (res.hotels[0].name) {  
          this.store.dispatch(ui.stopLoading());
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500,
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
    );
  }

}
