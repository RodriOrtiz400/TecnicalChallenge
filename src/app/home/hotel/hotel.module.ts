import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';

import { HotelRoutingModule } from './hotel-routing.module';
import { ShowHotelsComponent } from './show-hotels/show-hotels.component';
import { FindComponent } from './find/find.component';
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
  providers: [DatePipe],
})
export class HotelModule {}
