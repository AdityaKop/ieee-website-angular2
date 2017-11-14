import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }          from './home.component';
import { AnnouncementsComponent } from './announcements.component';
import { CalendarComponent }      from './calendar.component';
import { LabComponent }           from './lab.component';
import { AboutComponent }         from './about.component';
import { BoardComponent }         from './board.component';
import { SponsorsComponent }      from './sponsors.component';
import { ContactComponent }       from './contact.component'; 

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'announcements',
    component: AnnouncementsComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'lab',
    component: LabComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'board',
    component: BoardComponent
  },
  {
    path: 'sponsors',
    component: SponsorsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    HomeComponent,
    AnnouncementsComponent,
    CalendarComponent,
    LabComponent,
    AboutComponent,
    BoardComponent,
    SponsorsComponent,
    ContactComponent
  ]
})
export class AppRoutingModule {}
