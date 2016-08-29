/// <reference path="../typings/globals/jquery/index.d.ts"/>
/// <reference path="../typings/globals/materialize-css/index.d.ts"/>

import { Component }          from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

// Provider imports go here later

@Component({
  selector: 'my-app',
  templateUrl: 'templates/app.component.html',
  styleUrls: ['styles/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    // Add providers here later, when drawing from other data sources (ex. announcements)
  ]
})
export class AppComponent {
  title = 'IEEE @ UCI';  // Create banner image later
}
