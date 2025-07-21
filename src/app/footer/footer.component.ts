import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `<div class="footer">Footer</div>`,
  styles: [
    `
    .footer {
      background-color: #5dade2;
      border-top: 1px solid lightgrey;
      flex: 0 1 40px;
      min-height:150px;
    }
  `,
  ],
})
export class FooterComponent {}
