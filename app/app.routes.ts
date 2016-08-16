import { provideRouter, RouterConfig }  from '@angular/router';

import { AnnouncementsComponent } from './announcements.component';
import { CalendarComponent }      from './calendar.component';
import { LabComponent }           from './lab.component';
import { AboutComponent }         from './about.component';
import { BoardComponent }         from './board.component';
import { ContactComponent }       from './contact.component';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/announcements',
    pathMatch: 'full'
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
    path: 'contact',
    component: ContactComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
