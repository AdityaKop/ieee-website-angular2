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
      { selector: '#blizzard', offset: 0, callback: fadeInImage('#blizzard') },
      { selector: '#mentor-graphics', offset: 0, callback: fadeInImage('#mentor-graphics') },
      { selector: '#teradata', offset: 0, callback: fadeInImage('#teradata') }
    ];

    Materialize.scrollFire(options);
  }
}
