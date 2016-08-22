/// <reference path="../typings/globals/jquery/index.d.ts"/>

import { Component }            from '@angular/core';

@Component({
  selector: 'my-home',
  templateUrl: 'templates/home.component.html',
  styleUrls: ['styles/home.component.css']
})

export class HomeComponent {
  ngAfterContentInit() {
    $(document).ready(function(){
      $('.slider')['slider']({
        full_width: true,
        indicators: false,                  
      })
    });
  }
}
