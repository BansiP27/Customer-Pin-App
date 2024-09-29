import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { FileUploadModule } from 'ng2-file-upload';
import { NgxSelectModule } from 'ngx-select-ex';

import { CustomerModule } from '../customer/customer.module';
import { SharedModule } from '../shared/shared.module';

import { PinFormComponent } from './pin-form/pin-form.component';
import { PinListComponent } from './pin-list/pin-list.component';

import { GetCountryNameByIdPipe } from './pin-list/get-country-name-by-id.pipe';

@NgModule({
  declarations: [PinListComponent, PinFormComponent, GetCountryNameByIdPipe],
  exports: [PinListComponent, PinFormComponent, GetCountryNameByIdPipe],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    NgxSelectModule,
    FileUploadModule,
    CustomerModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PinModule {}
