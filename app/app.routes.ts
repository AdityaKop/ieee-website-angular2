import { provideRouter, RouterConfig }  from '@angular/router';

import { HomeComponent }          from './home.component';
import { AnnouncementsComponent } from './announcements.component';
import { CalendarComponent }      from './calendar.component';
import { LabComponent }           from './lab.component';
import { AboutComponent }         from './about.component';
import { BoardComponent }         from './board.component';
import { ContactComponent }       from './contact.component';

const routes: RouterConfig = [
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
    path: 'contact',
    component: ContactComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
