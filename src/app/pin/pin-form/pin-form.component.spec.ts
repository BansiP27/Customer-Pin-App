/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { NgxSelectModule } from 'ngx-select-ex';
import { ToastrModule } from 'ngx-toastr';
import { PinFormComponent } from './pin-form.component';

describe('PinFormComponent', () => {
  let component: PinFormComponent;
  let fixture: ComponentFixture<PinFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PinFormComponent],
      imports: [
        ToastrModule.forRoot(),
        HttpClientModule,
        FileUploadModule,
        NgxSelectModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
