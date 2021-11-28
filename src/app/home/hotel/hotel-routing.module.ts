import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShowHotelsComponent } from './show-hotels/show-hotels.component';
import { FindComponent } from './find/find.component';

const routes: Routes = [
  { path: 'find', component: FindComponent },
  { path: 'showHotels', component: ShowHotelsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelRoutingModule {}
