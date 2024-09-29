//Modules from angular
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Modules from libraries
import { NgxSelectModule } from 'ngx-select-ex';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';

//Components
import { AppComponent } from './app.component';

//Pipes

//Inner modules
import { AppRoutingModule } from './app-routing.module';
import { PinModule } from './pin/pin.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSelectModule,
    AppRoutingModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    PinModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
