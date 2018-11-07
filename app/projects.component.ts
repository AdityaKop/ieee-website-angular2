import { Component, OnInit } from '@angular/core';
declare var M:any;
//import * as M from 'node_modules/materialize-css/dist/js/materialize.min.js';

@Component({
  selector: 'my-projects',
  templateUrl: 'templates/projects.component.html',
  styleUrls: ['styles/projects.component.css']
})

export class ProjectsComponent implements OnInit {
	options = {};
	elems = {};

  ngOnInit() {
  //var slider = new M.Slider(document.querySelector('.slider'));
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, this.options);
  }

  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
