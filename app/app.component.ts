import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'templates/app.component.html',
  styleUrls: ['styles/app.component.css'],
  providers: [
    // Add providers here later, when drawing from other data sources (ex. announcements)
  ]
})
export class AppComponent {
  title = 'IEEE UCI';  // Create banner image later
}
