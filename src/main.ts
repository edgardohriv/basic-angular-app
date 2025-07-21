import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { HeaderComponent } from './app/header/header.component';
import { SidebarComponent } from './app/sidebar/sidebar.component';
import { FooterComponent } from './app/footer/footer.component';
import { ContentComponent } from './app/content/content.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
  ],
  template: `
    <div class="container">
      <app-header></app-header>
      <div class="body">
        <app-sidebar></app-sidebar>
        <app-content></app-content>
      </div>
      <app-footer></app-footer>
    </div>
  `,
  styles: [
    `
    body{
      overflow: hidden;
    }
    .container{
      display: flex;
      flex-flow: column nowrap;
      height: 100vh;
      width: 100vw;
      align-items: flex-stretch;
      justify-content: space-between;
    }
    .body {
        display: grid;
        grid-template-columns: 1fr 3fr;
        overflow-y: scroll;
        flex: 1 1 auto;
     }

  `,
  ],
})
export class App {
  title = 'basic-app';
}

bootstrapApplication(App);
