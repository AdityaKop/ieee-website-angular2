import { Component } from '@angular/core';
declare var M:any;	//No types for Materialize 1.0.0-alpha.1 yet

@Component({
  selector: 'my-home',
  templateUrl: 'templates/home.component.html',
  styleUrls: ['styles/home.component.css']
})

export class HomeComponent {
  ngAfterContentInit() {
    var slider = new M.Slider(document.querySelector('.slider'));
  }
}
