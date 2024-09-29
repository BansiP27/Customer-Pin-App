import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { NgxSelectModule } from 'ngx-select-ex';
import { ToastrModule } from 'ngx-toastr';

import { CustomerFormComponent } from './customer-form/customer-form.component';

import { FilterCountriesByRegionPipe } from './customer-form/filter-countries-by-region.pipe';

@NgModule({
  declarations: [CustomerFormComponent, FilterCountriesByRegionPipe],
  exports: [CustomerFormComponent, FilterCountriesByRegionPipe],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    NgxSelectModule,
  ],
})
export class CustomerModule {}
