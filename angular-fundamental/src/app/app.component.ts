import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'angular-fundamental';
  activate: boolean = false;
  appCounter: number = 20;

  // Cars
  cars: any = [
    { brand: 'Volkswagen', year: 2012, color: 'White', vin: 'dsad231ff' },
    { brand: 'Audi', year: 2011, color: 'Black', vin: 'gwregre345' },
    { brand: 'Renault', year: 2005, color: 'Gray', vin: 'h354htr' },
    { brand: 'BMW', year: 2003, color: 'Blue', vin: 'j6w54qgh' },
    { brand: 'Mercedes', year: 1995, color: 'White', vin: 'hrtwy34' },
    { brand: 'Volvo', year: 2005, color: 'Black', vin: 'jejtyj' },
    { brand: 'Honda', year: 2012, color: 'Yellow', vin: 'g43gr' },
    { brand: 'Jaguar', year: 2013, color: 'White', vin: 'greg34' },
    { brand: 'Ford', year: 2000, color: 'Black', vin: 'h54hw5' },
    { brand: 'Fiat', year: 2013, color: 'Red', vin: '245t2s' },
  ];

  // Array
  customerList: Array<string> = ['Customer 1', 'Customer 2', 'Customer 3'];
  pushCustomerList(): void {
    this.customerList.push(`Customer ${this.customerList.length + 1}`);
  }

  unShiftCustomerList(): void {
    this.customerList.unshift(`Customer ${this.customerList.length + 1}`);
  }

  RemoveCustomerList(index: number): void {
    this.customerList.splice(index, 1);
    console.log('Remove Customer List');
  }
}
