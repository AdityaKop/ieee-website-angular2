import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }          from './home.component';
import { EventsComponent } 	  from './events.component';
import { CalendarComponent }      from './calendar.component';
import { LabComponent }           from './lab.component';
import { AboutComponent }         from './about.component';
import { BoardComponent }         from './board.component';
import { SponsorsComponent }      from './sponsors.component';
import { ContactComponent }       from './contact.component';
import { ProjectsComponent }      from './projects.component';
import { GetInvolvedComponent }   from './get-involved.component';

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
    path: 'events',
    component: EventsComponent
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
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path:'get-involved',
    component: GetInvolvedComponent
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
    EventsComponent,
    CalendarComponent,
    LabComponent,
    AboutComponent,
    BoardComponent,
    SponsorsComponent,
    ContactComponent,
    ProjectsComponent,
    GetInvolvedComponent
  ]
})
export class AppRoutingModule {}
