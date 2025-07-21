import { Component } from '@angular/core';
import { EmployeeComponent } from '../employee.component';

@Component({
  selector: 'app-content',
  imports: [EmployeeComponent],
  template: `<div class="content"> Content <app-employee></app-employee></div>`,
  styles: [
    `
    .content {
      background-color: #fcf3cf;
      overflow-y: scroll;
      padding: 20px;
    }
    p {
      max-width: 600px;
    }
    `,
  ],
})
export class ContentComponent {}
