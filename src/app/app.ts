import { Component } from '@angular/core';
import { RouteConfig, RouterOutlet, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { SidebarComponent } from './navigation/sidebar.component';

import { HomePage } from './core/home.component';
import { DiscoverPage } from './core/discover.component';
import { AboutPage } from './core/about.component';

import { TrackStore } from './tracks/track.store';

@Component({
	selector: 'pfm-app',
	template: `
		<div class="pfm-app">
			<pfm-sidebar></pfm-sidebar>
			<div class="content-area">
				<router-outlet></router-outlet>
			</div>
		</div>
	`,
	styles: [
		`.pfm-app {
			display: flex;
			flex-direction: row;
		}
		
		.content-area {
			margin-left: 285px;
		}
		
		@media screen and (max-width: 900px) {
			.content-area {
				margin-left: 48px;
			}
		}`,
	],
	directives: [SidebarComponent, RouterOutlet],
	providers: [TrackStore, ROUTER_PROVIDERS]
})
@RouteConfig([
	{path: '/', 			name: 'Home', 		component: HomePage},
	{path: '/discover/...', name: 'Discover', 	component: DiscoverPage},
	{path: '/about',		name: 'About',		component: AboutPage},
])
export class AppComponent{}
