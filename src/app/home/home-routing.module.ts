import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', redirectTo: 'hotels/find', pathMatch: 'full' },
  {
    path: 'hotels',
    component: HomeComponent,
    loadChildren: () =>
      import('./hotel/hotel.module').then((module) => module.HotelModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
