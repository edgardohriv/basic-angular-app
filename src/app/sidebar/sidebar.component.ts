import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  template: `<div class="sidebar"> Nav </div>`,
  styles: [
    `
    .sidebar {
      background-color: silver;
      border-right: 1px solid lightgrey;
      height:100%;
    }
  `,
  ],
})
export class SidebarComponent {}
