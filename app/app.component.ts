import { Component }          from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

// Provider imports go here later

@Component({
  selector: 'my-app',

  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['/announcements']" routerLinkActive="active">Announcements</a>
      <a [routerLink]="['/calendar']" routerLinkActive="active">Calendar</a>
      <a [routerLink]="['/lab']" routerLinkActive="active">Lab Info</a>
      <a [routerLink]="['/about']" routerLinkActive="active">About Us</a>
      <a [routerLink]="['/board']" routerLinkActive="active">Board</a>
      <a [routerLink]="['/contact']" routerLinkActive="active">Contact Us</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['styles/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    // Add providers here later, when drawing from other data sources (ex. announcements)
  ]
})
export class AppComponent {
  title = 'IEEE @ UCI';  // Create banner image later
}
