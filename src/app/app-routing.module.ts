import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PinListComponent } from './pin/pin-list/pin-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pin-list',
    pathMatch: 'full',
  },
  {
    path: 'pin-list',
    component: PinListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
