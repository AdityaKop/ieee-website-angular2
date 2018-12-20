import { Component, OnInit } from '@angular/core';
declare var M:any;

@Component({
  selector: 'my-events',
  templateUrl: 'templates/events.component.html',
  styleUrls: ['styles/events.component.css']
})

export class EventsComponent implements OnInit {
    options = {};
    elems = {};

    ngOnInit() {
        var elems = document.querySelectorAll('.slider');
	var instances = M.Slider.init(elems, this.options);
    }
}
