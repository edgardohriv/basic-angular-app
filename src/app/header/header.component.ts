import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `<div class="header">Header</div>`,
  styles: [
    `
    .header {
      background-color: #5dade2;
      border-bottom: 1px solid lightgrey;
      flex: 0 1 auto;
      min-height:150px;
    }
  `,
  ],
})
export class HeaderComponent {}
