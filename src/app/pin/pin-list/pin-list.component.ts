import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  CountryList,
  CountryListResult,
  CustomerList,
  PinList,
} from './pin-list';

@Component({
  selector: 'app-pin-list',
  templateUrl: './pin-list.component.html',
  styleUrls: ['./pin-list.component.scss'],
})
export class PinListComponent implements OnInit {
  pinList: PinList[] = [];
  regionList: string[] = [];
  countryList: CountryList[] = [];
  customerList: CustomerList[] = JSON.parse(
    localStorage.getItem('customer-list')!
  );

  currentModalTitle: string = '';

  isCreateCustomerPressed: boolean = false;

  constructor(
    private readonly http: HttpClient,
    private readonly modalService: NgbModal,
    private readonly spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.getPinList();

    this.getRegionAndCountryList();
  }

  getRegionAndCountryList() {
    this.spinner.show();

    this.http
      .get<CountryListResult>('https://api.first.org/data/v1/countries')
      .subscribe({
        next: (result: CountryListResult) => {
          this.regionList = [
            ...new Set(
              Object.keys(result.data).map((key) => result.data[key].region)
            ),
          ];

          this.countryList = Object.keys(result.data).map((key) => {
            return {
              region: result.data[key].region,
              country: result.data[key].country,
              countryCode: key,
            };
          });

          setTimeout(() => {
            this.spinner.hide();
          }, 500);
        },
        error: (err: Error) =>
          setTimeout(() => {
            this.spinner.hide();
          }, 1000),
      });
  }

  getPinList() {
    this.pinList = JSON.parse(localStorage.getItem('pin-list')!) || [];
  }

  openGeneralModal(content: TemplateRef<Element>) {
    this.modalService.open(content, { size: 'lg' }).result.then(
      () => {
        //This is onclose event
      },
      () => {
        //This is onDismiss event
        if (
          this.customerList !==
          JSON.parse(localStorage.getItem('customer-list')!)
        ) {
          this.customerList = JSON.parse(
            localStorage.getItem('customer-list')!
          );
        }

        if (
          this.pinList.length !== JSON.parse(localStorage.getItem('pin-list')!)
        )
          this.getPinList();
      }
    );
  }
}
