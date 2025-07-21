import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { data } from './employees';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  employees$ = of(data);

  constructor() {}
}
