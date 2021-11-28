import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { HotelRoutingModule } from './hotel-routing.module';
import { MatCardModule } from '@angular/material/card';
import { ShowHotelsComponent } from './show-hotels/show-hotels.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FindComponent } from './find/find.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [ShowHotelsComponent, FindComponent],
  imports: [
    CommonModule,
    HotelRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
     
  ],
  providers: [
    DatePipe
  ]
})
export class HotelModule {}
