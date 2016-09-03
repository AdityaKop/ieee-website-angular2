"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var announcements_component_1 = require('./announcements.component');
var calendar_component_1 = require('./calendar.component');
var lab_component_1 = require('./lab.component');
var about_component_1 = require('./about.component');
var board_component_1 = require('./board.component');
var sponsors_component_1 = require('./sponsors.component');
var contact_component_1 = require('./contact.component');
var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'announcements',
        component: announcements_component_1.AnnouncementsComponent
    },
    {
        path: 'calendar',
        component: calendar_component_1.CalendarComponent
    },
    {
        path: 'lab',
        component: lab_component_1.LabComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'board',
        component: board_component_1.BoardComponent
    },
    {
        path: 'sponsors',
        component: sponsors_component_1.SponsorsComponent
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map