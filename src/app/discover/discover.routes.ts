import { RouterConfig } from '@angular/router';

import { DiscoverPage, DiscoverSub1, DiscoverSub2, DiscoverSub3 } from './discover.component';

export const DISCOVER_ROUTES: RouterConfig = [
	{
		path: 'discover',
		component: DiscoverPage,
		children: [
			{ path: '', 	redirectTo: '/discover/sub1', 	pathMatch: 'full' },
			{ path: 'sub1', component: DiscoverSub1 },
			{ path: 'sub2', component: DiscoverSub2 },
			{ path: 'sub3', component: DiscoverSub3 },
		]
	},
]
