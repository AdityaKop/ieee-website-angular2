import { Component } from '@angular/core';

@Component({
  selector: 'my-sponsors',
  templateUrl: 'templates/sponsors.component.html',
  styleUrls: ['styles/sponsors.component.css']
})

export class SponsorsComponent {
  ngAfterContentInit() {
    var fadeInImage = function(el) {
      console.log(el)
      Materialize.fadeInImage(el);
    }

    var options = [
      { selector: '#studypool', offset: 0, callback: fadeInImage('#studypool') }
    ];

    Materialize.scrollFire(options);
  }
}
