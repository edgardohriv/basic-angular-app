import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import {
  catchError,
  EMPTY,
  BehaviorSubject,
  combineLatest,
  map,
} from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee.component.html',
  styles: [` thead { color: #337AB7;    }  `],
})
export class EmployeeComponent {
  pageTitle = 'Employees';

  errorMessage = '';

  private _listFilter = '';

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filterSubject.next(value);
  }

  private filterSubject = new BehaviorSubject<string>('All');
  public filterObservable$ = this.filterSubject.asObservable();

  employees$ = combineLatest([
    this.employeeService.employees$,
    this.filterObservable$,
  ]).pipe(
    map(([employees, filterValue]) =>
      employees.filter((employee) => {
        if (filterValue.trim() === '' || filterValue.trim() === 'All') {
          return true;
        }
        const nameContainsFilter =
          employee.name.toLowerCase().indexOf(filterValue.toLowerCase()) > -1;
        const addressContainsFilter =
          employee.address.toLowerCase().indexOf(filterValue.toLowerCase()) >
          -1;
        const idEqualsFilter = employee.id === +filterValue;
        const ageEqualsFilter = employee.age === +filterValue;
        return (
          nameContainsFilter ||
          addressContainsFilter ||
          idEqualsFilter ||
          ageEqualsFilter
        );
      })
    ),
    catchError((err) => {
      this.errorMessage = err;
      return EMPTY;
    })
  );

  employeesSelected$ = this.employees$.pipe(
    map((employees) => {
      if (
        this.listFilter &&
        this.listFilter != '' &&
        this.listFilter != 'All'
      ) {
        return employees.map((employee) => ({
          ...employee,
          nameContainsFilter:
            employee.name.toLowerCase().indexOf(this.listFilter.toLowerCase()) >
            -1,
          addressContainsFilter:
            employee.address
              .toLowerCase()
              .indexOf(this.listFilter.toLowerCase()) > -1,
          idEqualsFilter: employee.id === +this.listFilter,
          ageEqualsFilter: employee.age === +this.listFilter,
        }));
      } else {
        return employees.map((employee) => ({
          ...employee,
          nameContainsFilter: false,
          addressContainsFilter: false,
          idEqualsFilter: false,
          ageEqualsFilter: false,
        }));
      }
    })
  );

  constructor(private employeeService: EmployeeService) {}
}
