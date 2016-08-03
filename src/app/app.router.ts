import { provideRouter, RouterConfig } from '@angular/router';

import { HomePage } from './core/home.component';
import { AboutPage } from './core/about.component';

import { DISCOVER_ROUTES } from './discover/discover.routes';

const routes: RouterConfig = [
	{ path: '', 			component: HomePage },
	{ path: 'about', 		component: AboutPage },
	...DISCOVER_ROUTES,
];

export const APP_ROUTERS = [
	provideRouter(routes),
];
