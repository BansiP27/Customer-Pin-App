import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CountryList } from 'src/app/pin/pin-list/pin-list';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent implements OnInit {
  @Input() regionList: string[] = [];
  @Input() countryList: CountryList[] = [];

  customerForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    region: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
  });

  constructor(
    private readonly toastr: ToastrService,
    private readonly modalService: NgbModal,
    private readonly spinner: NgxSpinnerService
  ) {}

  ngOnInit() {}

  saveForm() {
    if (this.customerForm.invalid) {
      return this.customerForm.markAllAsTouched();
    }

    this.spinner.show();

    const customerList =
      JSON.parse(localStorage.getItem('customer-list')!) || [];

    customerList.push({
      ...this.customerForm.value,
      id: uuidv4(),
    });

    localStorage.setItem('customer-list', JSON.stringify(customerList));

    this.customerForm.reset();

    this.modalService.dismissAll();

    setTimeout(() => {
      this.spinner.hide();

      this.toastr.success('Customer created successfully!');
    }, 500);
  }
}
