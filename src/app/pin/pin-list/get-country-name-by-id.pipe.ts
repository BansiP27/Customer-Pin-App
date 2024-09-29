import { Pipe, PipeTransform } from '@angular/core';
import { CustomerList } from './pin-list';

@Pipe({
  name: 'getCountryNameById',
})
export class GetCountryNameByIdPipe implements PipeTransform {
  transform(customerId: string, customers: CustomerList[]): string {
    const filteredCustomer = customers.find(
      (customer) => customer.id === customerId
    );
    return filteredCustomer ? filteredCustomer.title : 'Customer not found';
  }
}
